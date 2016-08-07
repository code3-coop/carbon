defmodule Carbon.SearchIndex do
  use GenServer

  @five_seconds_in_millis 5 * 1000

  def start_link do
    GenServer.start_link(__MODULE__, :ok, name: __MODULE__)
  end

  def refresh do
    GenServer.cast(__MODULE__, :refresh)
  end

  def init(:ok) do
    { :ok, %{} }
  end

  def handle_cast(:refresh, state) do
    if state[:timer] do
      Process.cancel_timer(state[:timer])
    end
    new_timer = Process.send_after(__MODULE__, :do_refresh, 0)
    { :noreply, Map.put(state, :timer, new_timer) }
  end

  def handle_info(:do_refresh, state) do
    Task.yield_many [
      Task.async(Ecto.Adapters.SQL, :query, [Carbon.Repo, "refresh materialized view search_index;"]),
      Task.async(Ecto.Adapters.SQL, :query, [Carbon.Repo, "refresh materialized view search_words;"]),
    ]
    { :noreply, state }
  end
end
