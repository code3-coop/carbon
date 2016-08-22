defmodule Carbon.EmailNotificationSender do
  use GenServer

  import Ecto.Query, only: [from: 2]

  @five_minutes_in_millis 5 * 60 * 1000

  def start_link do
    GenServer.start_link(__MODULE__, :ok, name: __MODULE__)
  end

  def init(:ok) do
    do_loop
    { :ok, %{} }
  end

  def handle_info(:check_and_send, state) do
    query = from r in Carbon.Reminder,
      join: u in assoc(r, :user),
      join: e in assoc(r, :event),
      left_join: et in assoc(e, :tags),
      where: e.active and r.active and u.active and not r.seen and not r.sent_by_email and u.send_email_reminders and ago(1, "hour") <= r.date and r.date < from_now(1, "minute"),
      preload: [
        user: u,
        event: { e, tags: et },
      ]

    for {_user_id, reminders} <- Carbon.Repo.all(query) |> Enum.group_by(&(&1.user_id)) do
      send_and_update(reminders)
    end

    do_loop
    { :noreply, state }
  end

  defp do_loop do
    Process.send_after(__MODULE__, :check_and_send, @five_minutes_in_millis)
  end

  defp send_and_update(reminders_for_one_user) do
    Carbon.Mailer.send_notification(reminders_for_one_user)
    |> set_all_as_sent(reminders_for_one_user)
  end

  defp set_all_as_sent(:ok, reminders) do
    ids_to_update = Enum.map(reminders, &(&1.id))
    query = from r in Carbon.Reminder, where: r.id in ^ids_to_update
    Carbon.Repo.update_all query, set: [ sent_by_email: true ]
  end
  defp set_all_as_sent(:error, _reminders), do: nil

end
