defmodule Carbon.Workflow.State do
  use Carbon.Web, :model

  schema "workflow_states" do
    field :name, :string
    field :icon_name, :string
    field :color, :string
    field :presentation_order_index, :integer, default: 0
    field :active, :boolean, default: true

    belongs_to :workflow, Carbon.Workflow
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :presentation_order_index, :icon_name, :color, :active])
    |> validate_required([:name, :presentation_order_index, :icon_name, :color])
  end
end
