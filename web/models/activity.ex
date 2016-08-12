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

  def new(account_id, user_id, action, target_schema, target_id \\ nil, target_value \\ nil) do
    if target_schema in [:accounts, :contacts] do
      Carbon.SearchIndex.refresh()
    end
    activity = %__MODULE__{
      :action => Atom.to_string(action),
      :target_schema => Atom.to_string(target_schema),
      :target_id => target_id,
      :target_value => target_value,
      :user_id => user_id,
      :account_id => account_id }
    spawn __MODULE__, :do_insert, [activity]
  end

  def do_insert(struct) do
    Carbon.Repo.insert!(changeset(struct))
  end
end
