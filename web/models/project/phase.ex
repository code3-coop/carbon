defmodule Carbon.Project.Phase do
  use Carbon.Web, :model

  schema "project_phases" do
    field :name, :string
    field :icon_name, :string
    field :color, :string
    field :presentation_order_index, :integer
    field :active, :boolean, default: true

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :icon_name, :color, :presentation_order_index])
    |> validate_required([:name, :presentation_order_index])
  end
end
