defmodule Carbon.TimesheetEntryController do
  use Carbon.Web, :controller

  import Carbon.ControllerUtils

  alias Carbon.{ Timesheet, TimesheetEntry, TimesheetEntryTag }

  def new(conn, %{"timesheet_id" => timesheet_id}) do
    conn
    |> assign(:changeset, TimesheetEntry.create_changeset(%TimesheetEntry{}))
    |> assign(:timesheet_id, timesheet_id)
    |> render("new.html")
  end

  def create(conn, %{"timesheet_id" => timesheet_id, "timesheet_entry" => timesheet_entry_params}) do
    tags = get_tags_from(TimesheetEntryTag, timesheet_entry_params)
    timesheet_id = String.to_integer(timesheet_id)
    ctx = get_context_from(timesheet_entry_params)
    timesheet_entry = %TimesheetEntry{
      timesheet_id: timesheet_id,
      project: ctx.project,
      account: ctx.account,
      duration_in_minutes: Carbon.Duration.parse_minutes(timesheet_entry_params["duration_in_minutes"])
    }
    changeset = TimesheetEntry.create_changeset(timesheet_entry, timesheet_entry_params, tags)
    case Repo.insert(changeset) do
      {:ok, timesheet_entry} ->
        conn
        |> put_flash(:info, "Timesheet entry created successfully.")
        |> redirect(to: timesheet_path(conn, :edit, timesheet_entry.timesheet_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> assign(:timesheet_id, timesheet_id)
        |> render("new.html")
    end
  end

  def edit(conn, %{"id" => entry_id}) do
    timesheet_entry = Repo.get!(TimesheetEntry, entry_id) |> Repo.preload([:tags, :project, :account])
    conn
    |> assign(:changeset, TimesheetEntry.update_changeset(timesheet_entry))
    |> assign(:timesheet_entry, timesheet_entry)
    |> render("edit.html")
  end

  def update(conn, %{"timesheet_id" => timesheet_id, "id" => entry_id, "timesheet_entry" => timesheet_entry_params}) do
    tags = get_tags_from(TimesheetEntryTag, timesheet_entry_params)
    timesheet_id = String.to_integer(timesheet_id)

    timesheet_entry_query = from te in TimesheetEntry,
      where: te.id == ^entry_id,
      left_join: t in assoc(te, :tags),
      left_join: p in assoc(te, :project),
      left_join: a in assoc(te, :account),
      left_join: ts in assoc(te, :timesheet),
      preload: [ tags: t, project: p, account: a, timesheet: ts]
    timesheet_entry = Repo.one(timesheet_entry_query)
    timesheet_entry_params = %{ timesheet_entry_params |
      "duration_in_minutes" => Carbon.Duration.parse_minutes(timesheet_entry_params["duration_in_minutes"])
    }

    changeset = TimesheetEntry.update_changeset(timesheet_entry, timesheet_entry_params, tags)

    case Repo.update(changeset) do
      {:ok, timesheet_entry} ->
        conn
        |> put_flash(:info, "Timesheet entry updated successfully.")
        |> redirect(to: timesheet_path(conn, :edit, timesheet_entry.timesheet_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> assign(:timesheet_id, timesheet_id)
        |> render("edit.html")
    end
  end

  defp get_context_from(%{"project_id"=> ""}), do: %{project: nil, account: nil}
  defp get_context_from(%{"project_id"=> project_id}) do
    project = Repo.get!(Carbon.Project, project_id) |> Repo.preload([:account])
    %{project: project, account: project.account}
  end


  def delete(conn, _params) do
    %{"timesheet_id" => timehseet_id, "id" => timesheet_entry_id} = conn.params
    timesheet_entry = Repo.get!(TimesheetEntry, timesheet_entry_id)
    changeset = TimesheetEntry.archive_changeset(timesheet_entry, %{active: false})

    case Repo.update(changeset) do
      {:ok, timesheet_entry} ->
        conn
        |> put_flash(:deleted_timesheet_entry, timesheet_entry)
        |> redirect(to: timesheet_path(conn, :edit, timehseet_id))
      {:error, _changeset} ->
        conn
        |> put_flash(:info, "Failed to delete the timesheet entry")
        |> assign(:timesheet_id, timehseet_id)
        |> redirect(to: timesheet_path(conn, :edit, timehseet_id))
    end
  end
  def restore(conn, _params) do
    %{"timesheet_id" => timehseet_id, "id" => timesheet_entry_id} = conn.params
    timesheet_entry = Repo.get!(TimesheetEntry, timesheet_entry_id)
    changeset = TimesheetEntry.archive_changeset(timesheet_entry, %{active: true})

    case Repo.update(changeset) do
      {:ok, _event} ->
        conn
        |> redirect(to: timesheet_path(conn, :edit, timehseet_id))
      {:error, _changeset} ->
        conn
        |> put_flash(:info, "Failed to restore the event.")
        |> assign(:timesheet_id, timehseet_id)
        |> redirect(to: timesheet_path(conn, :edit, timehseet_id))
    end
  end
end
