defmodule Carbon.Mailer do
  use Bamboo.Mailer, otp_app: :carbon
  import Bamboo.Email

  def send_login_link(email, token) do
    new_email
    |> to(email)
    |> from("login@carbon-app.com")
    |> subject("Your login link!")
    |> html_body(Phoenix.View.render_to_string(Carbon.EmailView, "login.html", %{token: token}))
    |> Carbon.Mailer.deliver_now
  end
end
