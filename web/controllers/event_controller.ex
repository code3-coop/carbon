defmodule Carbon.EventController do
  use Carbon.Web, :controller

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
        fragment("now()::date <= ?::date", er.date),
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

  def create(conn, %{"account_id" => account_id}, event_params) do
    conn
  end

end
