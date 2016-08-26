defmodule Carbon.Workflow.Value do
  use Carbon.Web, :model

  schema "workflow_field_values" do
    field :lock_version, :integer, default: 1

    field :string_value, :string
    field :integer_value, :integer
    field :float_value, :float
    field :date_value, Ecto.Date
    field :boolean_value, :boolean

    belongs_to :field, Carbon.Workflow.Field
    belongs_to :instance, Carbon.Workflow.Instance

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:lock_version, :string_value, :integer_value, :float_value, :date_value, :boolean_value])
    |> validate_required([:lock_version])
    |> optimistic_lock(:lock_version)
  end
end
