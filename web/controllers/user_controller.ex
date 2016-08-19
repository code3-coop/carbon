defmodule Carbon.UserController do
  use Carbon.Web, :controller

  import Carbon.ControllerUtils

  alias Carbon.{User, Timesheet}


  def show(conn, %{"id" => user_id}) do

    user = Repo.get(User, user_id) |> Repo.preload([:roles])

    timesheets_query = from t in Timesheet,
      where: t.user_id == ^user_id,
      left_join: s in assoc(t, :status),
      left_join: e in assoc(t, :entries),
      preload: [status: s, entries: e]
    timesheets = Repo.all timesheets_query

    conn
    |> assign(:user, user)
    |> assign(:timesheets, timesheets)
    |> render("show.html")
  end
end
