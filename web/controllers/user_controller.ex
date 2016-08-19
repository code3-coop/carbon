defmodule Carbon.UserController do
  use Carbon.Web, :controller

  import Carbon.ControllerUtils
  alias Carbon.User

  def show(conn, %{"id" => user_id}) do
    user = Repo.get(User, user_id) |> Repo.preload([:roles])

    conn
    |> assign(:user, user)
    |> render("show.html")
  end
end
