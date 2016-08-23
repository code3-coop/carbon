defmodule Carbon.SessionController do
  use Carbon.Web, :controller
  alias Carbon.User

  @carbon_token_name "_carbon_token"
  def carbon_token_name, do: @carbon_token_name

  @doc """
  Renders a login page where the user inputs her email.
  """
  def index(conn, _params) do
    changeset = User.login_changeset(%User{})
    render(conn, "index.html", changeset: changeset)
  end

  @doc """
  Receives the email posted by the user.

  If the email is known by the system, creates a short-lived token and sends
  a session link to the user. Otherwise, redirects the user to the account
  registration page passing along the email.
  """
  def create_and_send_session_link(conn, %{"user" => %{"email" => email}}) do
    case Repo.get_by(User, email: email) do
      nil ->
        render(conn, "register_new_user.html", email: email)
      user ->
        Carbon.Mailer.send_login_link(email, Phoenix.Token.sign(Carbon.Endpoint, @carbon_token_name, user.id))
        render(conn, "email_sent.html")
    end
  end

  @doc """
  Receives the registration information posted by the user.

  Creates a user and a short-lived token then sends a session link to the user.
  On User constraint error (duplicate `handle` or `email`) displays proper error
  messages.
  """
  def create_new_user(conn, %{"user" => _user_params}) do
    conn |> render("email_sent.html")
  end

  @doc """
  Receives the request created by the session link.

  If the token is still valid, finds the user associated to the token and
  assigns it to the web session; deletes the short-lived token; creates a
  long-lived token; adds a cookie to the response with the new long-lived token.
  Redirects the user to the landing page.

  Otherwise, redirects the user to the login page with proper error message.
  """
  def validate_token(conn, %{"token" => token}) do
    case Phoenix.Token.verify(Carbon.Endpoint, @carbon_token_name, token, max_age: 3*60) do
      {:ok, user_id} ->
        conn
        |> configure_session(renew: true)
        |> put_session(:user_id, user_id)
        |> redirect(to: Carbon.Router.Helpers.account_path(conn, :index))
      _ ->
        conn
        |> put_flash(:error, "The provided token is either expired or invalid")
        |> redirect(to: Carbon.Router.Helpers.session_path(conn, :index))
    end
  end

  @doc """
  Deletes the session and redirects to the login page.
  """
  def logout(conn, _params) do
    conn
    |> configure_session(drop: true)
    |> redirect(to: Carbon.Router.Helpers.session_path(conn, :index))
  end

end
