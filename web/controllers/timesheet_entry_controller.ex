defmodule Carbon.TimesheetEntryController do
  use Carbon.Web, :controller

  import Carbon.ControllerUtils

  alias Carbon.{ TimesheetEntry }

  def index(conn, %{"account_id" => account_id}) do
    # current_user = conn.assigns[:current_user]
    #
    # events_query = from e in Event,
    #   where: e.account_id == ^account_id and e.active == true,
    #   left_join: t in assoc(e, :tags),
    #   left_join: u in assoc(e, :user),
    #   left_join: er in Reminder, on:
    #     er.event_id == e.id and
    #     er.user_id == ^current_user.id and
    #     er.active == true and
    #     fragment("current_date <= ?", er.date),
    #   order_by: [desc: e.date],
    #   preload: [ tags: t, reminders: er, user: u ]
    #
    # conn
    # |> assign(:events, Repo.all(events_query))
    # |> assign(:account, Repo.get(Account, account_id))
    # |> render("index.html")
  end

  def new(conn, %{"timesheet_id" => timesheet_id}) do
    conn
    |> assign(:changeset, TimesheetEntry.create_changeset(%TimesheetEntry{}))
    |> assign(:timesheet_id, timesheet_id)
    |> render("new.html")
  end

  def create(conn, %{"timesheet_id" => timesheet_id, "timesheet_entry" => timesheet_entry_params}) do

    tags = get_tags_from(TimesheetEntryTags, timesheet_entry_params)
    account = get_account_from(timesheet_entry_params)
    project = get_project_from(timesheet_entry_params)
    timesheet_id = String.to_integer(timesheet_id)
    timesheet_entry = %TimesheetEntry{timesheet_id: timesheet_id, project: project, account: account}
    changeset = TimesheetEntry.create_changeset(timesheet_entry, timesheet_entry_params, tags)

    case Repo.insert(changeset) do
      {:ok, timesheet_entry} ->
        conn
        |> put_flash(:info, "Timesheet entry created successfully.")
        |> redirect(to: timesheet_path(conn, :show, timesheet_entry.timesheet_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> assign(:timesheet_id, timesheet_id)
        |> render("new.html")
    end
  end

  defp get_account_from(%{"account_id" => account_id}) do
    Repo.get!(Carbon.Account, account_id)
  end
  defp get_account_from(_params), do: nil

  defp get_project_from(%{"project_id"=> project_id}) do
    Repo.get!(Carbon.Project, project_id)
  end
  defp get_project_from(_params), do: nil

  def delete(conn, _params) do
    # current_user = conn.assigns[:current_user]
    # %{"account_id" => account_id, "id" => event_id} = conn.params
    # event = Repo.get!(Event, event_id)
    # changeset = Event.archive_changeset(event, %{active: false})
    #
    # case Repo.update(changeset) do
    #   {:ok, event} ->
    #     Carbon.Activity.new(account_id, current_user.id, :remove, :events, event.id, changeset)
    #     conn
    #     |> put_flash(:deleted_event, event)
    #     |> redirect(to: account_event_path(conn, :index, account_id))
    #   {:error, _changeset} ->
    #     conn
    #     |> put_flash(:info, "Failed to delete the event.")
    #     |> assign(:account_id, account_id)
    #     |> redirect(to: account_event_path(conn, :index, account_id))
    # end
  end
  def restore(conn, _params) do
    # current_user = conn.assigns[:current_user]
    # %{"account_id" => account_id, "id" => event_id} = conn.params
    # event = Repo.get!(Event, event_id)
    # changeset = Event.archive_changeset(event, %{active: true})
    #
    # case Repo.update(changeset) do
    #   {:ok, event} ->
    #     Carbon.Activity.new(account_id, current_user.id, :restore, :events, event.id, changeset)
    #     conn
    #     |> redirect(to: account_event_path(conn, :index, account_id))
    #   {:error, _changeset} ->
    #     conn
    #     |> put_flash(:info, "Failed to restore the event.")
    #     |> assign(:account_id, account_id)
    #     |> redirect(to: account_event_path(conn, :index, account_id))
    # end
  end
end
