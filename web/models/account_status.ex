defmodule Carbon.AccountStatus do
  use Carbon.Web, :model

  schema "account_statuses" do
    field :key, :string
    field :color, :string
    field :active, :boolean, default: true

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:description, :color, :active])
    |> validate_required([:description])
  end
end
