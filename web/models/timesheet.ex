defmodule Carbon.Timesheet do
  use Carbon.Web, :model

  schema "timesheets" do
    field :lock_version, :integer, default: 1
    field :active, :boolean, default: true

    field :start_date, Ecto.Date
    field :notes, :string

    belongs_to :status, Carbon.TimesheetStatus
    belongs_to :user, Carbon.User
    has_many :entries, Carbon.TimesheetEntry

    timestamps
  end


  @doc """
  Compute total of minutes for billable and non billable time. Returns a map
  in the following format %{billables: 21, non_billables: 42}
  """
  def total_billables_and_non_billables(timesheet) do
    Enum.reduce(timesheet.entries, %{billables: 0, non_billables: 0}, &entry_totaler/2)
  end
  defp entry_totaler(%{billable: true, duration_in_minutes: duration_in_minutes}, acc) do
    %{acc | billables: acc.billables + duration_in_minutes}
  end
  defp entry_totaler(%{billable: false, duration_in_minutes: duration_in_minutes}, acc) do
    %{acc | non_billables: acc.non_billables + duration_in_minutes}
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def update_changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:start_date, :notes, :status_id])
    |> validate_required([:start_date, :status_id])
  end

  def create_changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:start_date, :notes, :status_id])
    |> validate_required([:start_date, :status_id])
  end
  def archive_changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:active])
  end

end
