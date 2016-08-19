defmodule Carbon.TimesheetStatus do
  use Carbon.Web, :model

  schema "timesheet_statuses" do
    field :key, :string
    field :active, :boolean, default: false
    field :editable_by_owner?, :boolean, default: false
    field :editable_by_manager?, :boolean, default: false
    field :presentation_order, :integer
    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:key, :active])
    |> validate_required([:key])
  end
end
