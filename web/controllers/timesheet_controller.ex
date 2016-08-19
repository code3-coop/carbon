defmodule Carbon.TimesheetController do
  use Carbon.Web, :controller

  alias Carbon.{ Timesheet, TimesheetEntry }

  def index(conn, _params) do
    current_user = conn.assigns[:current_user]

    timesheets_query = from t in Timesheet,
      where: t.user_id == ^current_user.id and t.active == true,
      left_join: e in assoc(t, :entries),
      left_join: u in assoc(t, :user),
      left_join: s in assoc(t, :status),
      order_by: [desc: t.start_date],
      preload: [ entries: e, user: u, status: s ]

    timesheets = Repo.all(timesheets_query)
    groupped_timesheets = Enum.group_by timesheets, &(&1.status)

    sorted_status = groupped_timesheets
    |> Map.keys()
    |> Enum.sort_by(&(&1.id))

    conn
    |> assign(:groupped_timesheets, groupped_timesheets)
    |> assign(:sorted_status, sorted_status)
    |> render("index.html")
  end

  def new(conn, _params) do
    conn
    |> assign(:changeset, Timesheet.create_changeset(%Timesheet{}))
    |> render("new.html")
  end

  def create(conn, %{"timesheet" => timesheet_params}) do
    current_user = conn.assigns[:current_user]
    timesheet = %Timesheet{user_id: current_user.id}
    changeset = Timesheet.create_changeset(timesheet, timesheet_params)
    case Repo.insert changeset do
      {:ok, timesheet} ->
        conn
        |> put_flash(:info, "Timesheet created successfully")
        |> redirect(to: timesheet_path(conn, :show, timesheet.id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> render("new.html")
    end
  end
  def show(conn, %{"id" => timesheet_id}) do
    timesheet_entry_query = from te in TimesheetEntry,
      where: te.timesheet_id == ^timesheet_id and te.active == true,
      left_join: p in assoc(te, :project),
      left_join: a in assoc(te, :account),
      left_join: ta in assoc(te, :tags),
      preload: [project: p, account: a, tags: ta]
    timesheet = Repo.get!(Timesheet, timesheet_id) |> Repo.preload([:status])
    timesheet_entries = Repo.all(timesheet_entry_query)
    timesheet_entries_by_date = Enum.group_by(timesheet_entries, &(&1.date))
    total_duration = Enum.reduce timesheet_entries, 0, &(&1.duration_in_minutes + &2)

    conn
    |> assign(:timesheet, timesheet)
    |> assign(:timesheet_entries_by_date, timesheet_entries_by_date)
    |> assign(:total_duration, total_duration)
    |> render("show.html")
  end

  def edit(conn, %{"id" => timesheet_id}) do
    #TODO Theses two query could be one, just don't kown how.
    timesheet_entry_query = from te in TimesheetEntry,
      where: te.timesheet_id == ^timesheet_id and te.active == true,
      left_join: p in assoc(te, :project),
      left_join: a in assoc(te, :account),
      left_join: ta in assoc(te, :tags),
      preload: [project: p, account: a, tags: ta]
    timesheet = Repo.get!(Timesheet, timesheet_id)|> Repo.preload([:status])
    timesheet_entries = Repo.all(timesheet_entry_query)
    timesheet_entries_by_date = Enum.group_by(timesheet_entries, &(&1.date))
    total_duration = Enum.reduce timesheet_entries, 0, &(&1.duration_in_minutes + &2)
    changeset = Timesheet.update_changeset(timesheet)
    conn
    |> assign(:timesheet, timesheet)
    |> assign(:timesheet_entries_by_date, timesheet_entries_by_date)
    |> assign(:changeset, changeset)
    |> assign(:total_duration, total_duration)
    |> render("edit.html")
  end

  def update(conn, %{"id" => id, "timesheet" => timesheet_params}) do
    timesheet = Repo.get!(Timesheet, id) |> Repo.preload([:status])
    changeset = Timesheet.update_changeset(timesheet, timesheet_params)
    case Repo.update(changeset) do
      {:ok, _timesheet} ->
        conn
        |> put_flash(:info, "timesheet updated successfully.")
        |> redirect(to: timesheet_path(conn, :index))
      {:error, changeset} ->
        render(conn, "edit.html", timesheet: timesheet, changeset: changeset)
    end
  end

  def delete(conn, _params) do
    %{"id" => timesheet_id} = conn.params
    timesheet = Repo.get!(Timesheet, timesheet_id)
    changeset = Timesheet.archive_changeset(timesheet, %{active: false})

    case Repo.update(changeset) do
      {:ok, timesheet} ->
        conn
        |> put_flash(:deleted_timesheet, timesheet)
        |> redirect(to: timesheet_path(conn, :index))
      {:error, _changeset} ->
        conn
        |> put_flash(:info, "Failed to delete timesheet.")
        |> redirect(to: timesheet_path(conn, :index))
    end
  end
  def restore(conn, _params) do
    %{"id" => timesheet_id} = conn.params
    timesheet = Repo.get!(Timesheet, timesheet_id)
    changeset = Timesheet.archive_changeset(timesheet, %{active: true})

    case Repo.update(changeset) do
      {:ok, _timesheet} ->
        conn
        |> redirect(to: timesheet_path(conn, :index))
      {:error, _changeset} ->
        conn
        |> put_flash(:info, "Failed to restore the event.")
        |> redirect(to: timesheet_path(conn, :index))
    end
  end
end
