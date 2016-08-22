defmodule Carbon.EmailNotificationSender do
  use GenServer

  import Ecto.Query, only: [from: 2]

  @five_minutes_in_millis 5 * 60 * 1000

  @query from r in Carbon.Reminder,
    join: u in assoc(r, :user),
    where: r.active and not r.seen and not r.sent_by_email and u.send_email_reminders and ago(1, "hour") <= r.date and r.date < from_now(1, "minute")

  def start_link do
    GenServer.start_link(__MODULE__, :ok, name: __MODULE__)
  end

  def init(:ok) do
    check_later
    { :ok, %{} }
  end

  def handle_info(:check_and_send, state) do
    Carbon.Repo.all @query

    check_later
    { :noreply, state }
  end

  defp check_later do
    Process.send_after(__MODULE__, :check_and_send, @five_minutes_in_millis)
  end
end
