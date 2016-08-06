defmodule Carbon.EventController do
  use Carbon.Web, :controller

  alias Carbon.Event

  def index(conn, %{"account_id" => id}) do
    current_user = conn.assigns[:current_user]
    
    events_query = from e in Event,
      where: e.account_id == ^id,
      left_join: t in assoc(e, :tags),
      left_join: u in assoc(e, :user),
      left_join: er in Carbon.Reminder, on: er.event_id == e.id and er.user_id == ^current_user.id,
      preload: [
        tags: t,
        reminders: er,
        user: u
      ]
    events = Repo.all(events_query)
    render(conn, "index.html", events: Repo.all(events_query))
  end
end
