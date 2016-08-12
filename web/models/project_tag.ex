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
    |> cast(params, [:description, :color, :active])
    |> validate_required([:description, :color, :active])
    |> validate_inclusion(:color, Carbon.SupportedColors.tags)
    |> validate_inclusion(:color, Carbon.SupportedColors.tags)
  end
end
