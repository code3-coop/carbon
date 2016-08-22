defmodule Carbon.EmailNotificationSender do
  use GenServer

  @five_minutes_in_millis 5 * 60 * 1000

  def start_link do
    GenServer.start_link(__MODULE__, :ok, name: __MODULE__)
  end

  def init(:ok) do
    check_later
    { :ok, %{} }
  end

  def handle_cast(:check_and_send, state) do
    check_later
    { :noreply, state }
  end

  defp check_later do
    Process.send_after(__MODULE__, :check_and_send, @five_minutes_in_millis)
  end
end
