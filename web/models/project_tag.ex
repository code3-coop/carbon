defmodule Carbon.ProjectTag do
  use Carbon.Web, :model

  schema "project_tags" do
    field :description, :string
    field :color, :string
    field :active, :boolean, default: false

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:description, :color])
    |> validate_required([:description, :color])
    |> validate_inclusion(:color, Carbon.SupportedEnums.colors)
  end
end
