defmodule Carbon.SessionPlug do
  import Plug.Conn
  alias Carbon.{SessionController, User, Repo}

  @moduledoc """
  Intercepts protected routes.
  
  Checks the connection for a web session or a cookie containing a long-lived
  session token. If the web session is present, pass-through. If the long-lived
  session token is still valid, assign the user to the web session and
  pass-through. Otherwise, halt and redirect to the login page.
  """

  @one_week_in_sec 7*24*60*60

  def init(opts), do: opts

  def call(conn, _opts) do
    conn
    |> maybe_assign_user
    |> maybe_redirect_to_login_page
  end

  defp maybe_assign_user(conn) do
    case get_key(conn, :user_id) do
      nil -> conn
      user_id -> assign(conn, :current_user, Repo.get!(User, user_id))
    end
  end

  defp maybe_redirect_to_login_page(%Plug.Conn{assigns: %{current_user: user}} = conn) when user != nil, do: conn
  defp maybe_redirect_to_login_page(conn) do
    conn
    |> Phoenix.Controller.put_flash(:error, "You must be logged in to access this page")
    |> Phoenix.Controller.redirect(to: Carbon.Router.Helpers.session_path(conn, :index))
    |> halt()
  end

  defp get_key(conn, key) do
    if Mix.env == :test do
      conn.private[key]
    else
      get_session(conn, key)
    end
  end
end

