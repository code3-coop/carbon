defmodule Carbon.Activity do
  use Carbon.Web, :model

  # On 2016-01-01, on account id#12, Joe added deal id#34.

  schema "activities" do
    field :action, :string

    field :entity_name, :string
    field :entity_id, :integer
    field :changes, :string

    field :trigger_status, :string, default: "pending"

    belongs_to :user, Carbon.User
    belongs_to :account, Carbon.Account

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:action, :entity_name, :user_id, :account_id, :trigger_status])
    |> validate_required([:action, :entity_name, :user_id, :account_id])
    |> validate_inclusion(:action, ~w(create remove update restore))
    |> validate_inclusion(:trigger_status, ~w(pending noop ok error))
    |> foreign_key_constraint(:user_id)
    |> foreign_key_constraint(:account_id)
  end

  def new(account_id, user_id, action, entity_name, entity_id, changeset) do
    if Mix.env != :test do
      do_new(account_id, user_id, action, entity_name, entity_id, changeset)
    end
  end

  defp do_new(account_id, user_id, :remove, entity_name, entity_id, nil) do
    activity = %__MODULE__{
      :action => "remove",
      :entity_name => entity_name,
      :entity_id => entity_id,
      :changes => "",
      :user_id => user_id,
      :account_id => (if is_bitstring(account_id), do: String.to_integer(account_id), else: account_id) }
    spawn __MODULE__, :do_insert, [activity]
  end

  defp do_new(account_id, user_id, action, entity_name, entity_id, %Ecto.Changeset{changes: changes}) do
    string_changes = changes
    |> Map.to_list
    |> Stream.filter(fn {_key, value} -> value != [] end)
    |> Stream.filter(fn {key, _value} -> key != :lock_version end)
    |> Stream.map(&Kernel.elem(&1, 0))
    |> Stream.map(&Atom.to_string/1)
    |> Enum.to_list
    |> Enum.join(",")

    activity = %__MODULE__{
      :action => Atom.to_string(action),
      :entity_name => entity_name,
      :entity_id => entity_id,
      :changes => string_changes,
      :user_id => user_id,
      :account_id => (if is_bitstring(account_id), do: String.to_integer(account_id), else: account_id) }
    spawn __MODULE__, :do_insert, [activity, changes]
  end

  def do_insert(activity, changes \\ []) do
    if activity.entity_name in ~w(account contact) do
      Carbon.SearchIndex.refresh()
    end

    activity
    |> changeset
    |> Carbon.Repo.insert!
    |> Carbon.Trigger.fire(changes)
  end
end
