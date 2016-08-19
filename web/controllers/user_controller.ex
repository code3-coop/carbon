defmodule Carbon.UserController do
  use Carbon.Web, :controller

  import Carbon.ControllerUtils

  alias Carbon.{User, Timesheet, Account}


  def show(conn, %{"id" => user_id}) do

    user = Repo.get(User, user_id) |> Repo.preload([:roles])

    timesheets_query = from t in Timesheet,
      where: t.user_id == ^user_id,
      left_join: s in assoc(t, :status),
      left_join: e in assoc(t, :entries),
      order_by: :updated_at,
      limit: 5,
      preload: [status: s, entries: e]
    timesheets = Repo.all timesheets_query
    account_query = from a in Account,
      where: a.owner_id == ^user_id and a.active == true,
      left_join: s in assoc(a, :status),
      left_join: t in assoc(a, :tags),
      preload: [status: s, tags: t]
    accounts = Repo.all account_query

    conn
    |> assign(:user, user)
    |> assign(:timesheets, timesheets)
    |> assign(:accounts, accounts)
    |> assign(:deals, [])
    |> render("show.html")
  end
end
