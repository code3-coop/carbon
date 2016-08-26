defmodule Carbon.Workflow.Enum do
  use Carbon.Web, :model

  schema "workflow_field_enums" do
    field :name, :string
    field :presentation_order_index, :integer, default: 0
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :presentation_order_index])
    |> validate_required([:name, :presentation_order_index])
  end
end
