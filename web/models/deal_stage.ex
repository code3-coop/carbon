defmodule Galaxy.DealStage do
  use Galaxy.Web, :model

  schema "deal_stages" do
    field :description, :string
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
    |> validate_required([:description, :color, :active])
  end
end
