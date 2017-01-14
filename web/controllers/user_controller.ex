defmodule Carbon.UserController do
  use Carbon.Web, :controller

  alias Carbon.{ User, Timesheet, Account, Deal, Paginator }

  def index(conn, params) do
    query = from u in User,
      where: u.active == true,
      preload: :roles

    paginator = Paginator.create(query, params)

    conn
    |> assign(:users, paginator.data)
    |> assign(:paginator, paginator)
    |> render("index.html")

  end
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

    deal_query = from d in Deal,
      where: d.owner_id == ^user_id and d.active == true,
      left_join: t in assoc(d, :tags),
      preload: [tags: t]
    deals = Repo.all deal_query

    conn
    |> assign(:user, user)
    |> assign(:timesheets, timesheets)
    |> assign(:accounts, accounts)
    |> assign(:deals, deals)
    |> render("show.html")
  end

  def edit(conn, %{"id" => user_id}) do
    user = Repo.get(User, String.to_integer(user_id))
    changeset = User.changeset(user)
    conn
    |> assign(:changeset, changeset)
    |> assign(:user, user)
    |> render("edit.html")
  end

  def update(conn, %{"id" => user_id, "user" => user_params}) do
    user = Repo.get(User, user_id)
    changeset = User.changeset(user, user_params)
    case Repo.update(changeset) do
      {:ok, _user} ->
        conn
        |> put_flash(:info, "Successfully updated user profile")
        |> redirect(to: user_path(conn, :show, user_id))
      {:error, changeset} ->
        conn
        |> put_flash(:info, "Failed to update user profile")
        |> assign(:user, user)
        |> assign(:changeset, changeset)
        |> render("edit.html")
    end

  end
end
