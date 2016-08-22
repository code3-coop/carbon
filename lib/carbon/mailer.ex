defmodule Carbon.Mailer do
  use Bamboo.Mailer, otp_app: :carbon
  import Bamboo.Email

  def send_login_link(email, token) do
    website_entry_point = Application.get_env(:carbon, Carbon.Mailer)[:website_entry_point]
    new_email
    |> to(email)
    |> from("login@carbon-app.com")
    |> subject("Your login link!")
    |> html_body(Phoenix.View.render_to_string(Carbon.EmailView, "login.html", %{token: token, website_entry_point: website_entry_point}))
    |> Carbon.Mailer.deliver_now
  end
end
