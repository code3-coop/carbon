defmodule Carbon.Workflow.Field do
  use Carbon.Web, :model

  schema "workflow_fields" do
    field :name, :string
    field :description, :string
    field :type, :string
    field :presentation_order_index, :integer, default: 0
    field :entity_reference_name, :string

    has_many :enums, Carbon.Workflow.Enum
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :description, :type, :entity_reference_name, :presentation_order_index])
    |> validate_required([:name, :description, :type, :presentation_order_index])
    |> validate_inclusion(:type, ~w(text long_text integer currency decimal date enum reference boolean))
  end
end
