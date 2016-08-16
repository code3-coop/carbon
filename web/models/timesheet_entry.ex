defmodule Carbon.TimesheetEntry do
  use Carbon.Web, :model

  schema "timesheet_entries" do
    field :lock_version, :integer, default: 1
    field :active, :boolean, default: true

    field :duration_in_minutes, :integer, default: 0
    field :date, Ecto.Date
    field :notes, :string
    field :billable, :boolean, default: true

    belongs_to :timesheet, Carbon.Timesheet
    belongs_to :account, Carbon.Account
    belongs_to :project, Carbon.Project
    many_to_many :tags, Carbon.TimesheetEntryTag, join_through: "j_timesheet_entries_tags", on_replace: :delete

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:duration_in_minutes, :date, :notes, :billable])
    |> validate_required([:duration_in_minutes, :date, :notes, :billable])
  end
end
