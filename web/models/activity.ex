defmodule Carbon.Activity do
  use Carbon.Web, :model

  # On 2016-01-01, on account id#12, Joe added deal id#34.

  schema "activities" do
    field :action, :string

    field :target_schema, :string
    field :target_id, :integer
    field :target_value, :string

    belongs_to :user, Carbon.User
    belongs_to :account, Carbon.Account

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:action, :target_schema, :user_id, :account_id])
    |> validate_required([:action, :target_schema, :user_id, :account_id])
    |> validate_inclusion(:action, ~w(create remove update restore))
    |> foreign_key_constraint(:user_id)
    |> foreign_key_constraint(:account_id)
  end

  def new(account_id, user_id, action, target_schema, target_id, changeset) do
    if Mix.env != :test do
      do_new(account_id, user_id, action, target_schema, target_id, changeset)
    end
  end

  defp do_new(account_id, user_id, :remove, target_schema, target_id, nil) do
    activity = %__MODULE__{
      :action => "remove",
      :target_schema => Atom.to_string(target_schema),
      :target_id => target_id,
      :target_value => "",
      :user_id => user_id,
      :account_id => (if is_bitstring(account_id), do: String.to_integer(account_id), else: account_id) }
    spawn __MODULE__, :do_insert, [activity]
  end

  defp do_new(account_id, user_id, action, target_schema, target_id, %Ecto.Changeset{changes: changes}) do
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
      :target_schema => Atom.to_string(target_schema),
      :target_id => target_id,
      :target_value => string_changes,
      :user_id => user_id,
      :account_id => (if is_bitstring(account_id), do: String.to_integer(account_id), else: account_id) }
    spawn __MODULE__, :do_insert, [activity, changes]
  end

  def do_insert(activity, changes \\ []) do
    if activity.target_schema in ~w(account contact) do
      Carbon.SearchIndex.refresh()
    end
    Carbon.Trigger.start(activity, changes)
    Carbon.Repo.insert!(changeset(activity))
  end
end
