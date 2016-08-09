defmodule Carbon.EventController do
  use Carbon.Web, :controller

  import Carbon.ControllerUtils

  alias Carbon.{ Account, Event, Reminder }

  def index(conn, %{"account_id" => account_id}) do
    current_user = conn.assigns[:current_user]
    
    events_query = from e in Event,
      where: e.account_id == ^account_id and e.active == true,
      left_join: t in assoc(e, :tags),
      left_join: u in assoc(e, :user),
      left_join: er in Reminder, on:
        er.event_id == e.id and
        er.user_id == ^current_user.id and
        er.active == true and
        fragment("current_date <= ?", er.date),
      order_by: [desc: e.date],
      preload: [ tags: t, reminders: er, user: u ]

    conn
    |> assign(:events, Repo.all(events_query))
    |> assign(:account, Repo.get(Account, account_id))
    |> render("index.html")
  end

  def new(conn, %{"account_id" => account_id}) do
    conn
    |> assign(:changeset, Event.changeset(%Event{}))
    |> assign(:account_id, account_id)
    |> render("new.html")
  end

  def create(conn, %{"account_id" => account_id, "event" => event_params}) do
    current_user = conn.assigns[:current_user]
    tags = get_tags_from(Event, event_params)
    event = %Event{user: current_user, account: Repo.get(Account, account_id)}
    changeset = Event.create_changeset(event, event_params, tags)

    case Repo.insert(changeset) do
      {:ok, event} ->
        Carbon.Activity.new(account_id, current_user.id, :create, :events, event.id, inspect(event))
        conn
        |> put_flash(:info, "Event created successfully.")
        |> redirect(to: account_event_path(conn, :index, account_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> assign(:account_id, account_id)
        |> render("new.html")
    end
  end

  def delete(conn, %{"account_id" => account_id, "id" => event_id}) do
    current_user = conn.assigns[:current_user]
    event = Repo.get!(Event, event_id)
    changeset = Event.archive_changeset(event, %{active: false})
    case Repo.update(changeset) do
      {:ok, event} ->
        Carbon.Activity.new(String.to_integer(account_id), current_user.id, :delete, :events, event.id, inspect(event))
        conn
        |> put_flash(:info, "Event archived successfully.")
        |> redirect(to: account_event_path(conn, :index, account_id))
      {:error, _changeset} -> 
        conn
        |> put_flash(:info, "Failed to archive the event.")
        |> assign(:account_id, account_id)
        |> redirect(to: account_event_path(conn, :index, account_id))
    end
  end
end
