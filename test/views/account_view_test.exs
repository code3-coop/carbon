defmodule Carbon.AccountViewTest do
  use Carbon.ConnCase, async: true

  # Bring render/3 and render_to_string/3 for testing custom views
  # import Phoenix.View

  test "events are grouped, filtered and sorted" do
    all_events = for n <- -10..10 do
      # using description to test equality
      %Carbon.Event{description: "#{n}", date: Timex.now |> Timex.shift(days: n) |> Timex.to_erl |> Ecto.DateTime.from_erl}
    end
    
    result = Carbon.AccountView.events_summary(all_events)

    assert ~w(-1 -2 -3 -4 -5) == Enum.map(result[:past], &(&1.description))
    assert ~w(4 3 2 1 0) == Enum.map(result[:future], &(&1.description))
  end

end
