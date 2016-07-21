defmodule Carbon.DealStage do
  use Carbon.Web, :model

  schema "deal_stages" do
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
    |> cast(params, [:key, :color, :active])
    |> validate_required([:key])
  end
end
