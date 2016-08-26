defmodule Carbon.Workflow.Section do
  use Carbon.Web, :model

  schema "workflow_sections" do
    field :name, :string
    field :description, :string
    field :presentation_order_index, :integer, default: 0

    has_many :fields, Carbon.Workflow.Field
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :description, :presentation_order_index])
    |> validate_required([:name, :description, :presentation_order_index])
  end
end
