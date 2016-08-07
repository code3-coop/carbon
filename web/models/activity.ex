defmodule Carbon.Activity do
  use Carbon.Web, :model

  # On 2016-01-01, on account id#12, Joe added deal id#34 with value "..."

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
    |> validate_inclusion(:action, ~w(create remove update))
    |> foreign_key_constraint(:user_id)
    |> foreign_key_constraint(:account_id)
  end

end
