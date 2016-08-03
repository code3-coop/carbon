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
    |> maybe_assign_user_from_token
    |> maybe_redirect_to_login_page
  end

  defp maybe_assign_user_from_token(%Plug.Conn{assigns: %{current_user: user}} = conn) when user != nil, do: conn
  defp maybe_assign_user_from_token(conn) do
    token_name = SessionController.carbon_token_name
    with {:ok, token} <- Map.fetch(conn.cookies, token_name),
         {:ok, user_id} <- Phoenix.Token.verify(Carbon.Endpoint, token_name, token, max_age: @one_week_in_sec) do
      assign(conn, :current_user, Repo.get!(User, user_id))
    else
      _ -> conn
    end
  end

  defp maybe_redirect_to_login_page(%Plug.Conn{assigns: %{current_user: user}} = conn) when user != nil, do: conn
  defp maybe_redirect_to_login_page(conn) do
    conn
    |> Phoenix.Controller.put_flash(:error, "You must be logged in to access this page")
    |> Phoenix.Controller.redirect(to: Carbon.Router.Helpers.session_path(conn, :index))
    |> halt()
  end
end

