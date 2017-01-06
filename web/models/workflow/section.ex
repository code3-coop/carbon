defmodule Carbon.Workflow.Section do
  use Carbon.Web, :model

  schema "workflow_sections" do
    field :name, :string
    field :description, :string
    field :presentation_order_index, :integer, default: 0
    field :active, :boolean, default: true

    has_many :fields, Carbon.Workflow.Field
    belongs_to :workflow, Carbon.Workflow
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :description, :presentation_order_index, :active])
    |> validate_required([:name, :description, :presentation_order_index])
    |> cast_assoc(:fields, required: false)
  end
end
