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

  def send_notification(reminders_for_one_user) do
    try do
      to_email = hd(reminders_for_one_user).user.email
      reminder_count = length reminders_for_one_user

      new_email
      |> to(to_email)
      |> from("notifications@carbon-app.com")
      |> subject("#{reminder_count} new notitication#{if reminder_count > 1, do: "s"} from Carbon")
      |> html_body(Phoenix.View.render_to_string(Carbon.EmailView, "notification.html", %{reminders: reminders_for_one_user}))
      |> Carbon.Mailer.deliver_later

      :ok
    rescue
      _ -> :error
    end
  end
end
