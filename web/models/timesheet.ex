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
