defmodule Carbon.AccountViewTest do
  use Carbon.ConnCase, async: true

  # Bring render/3 and render_to_string/3 for testing custom views
  # import Phoenix.View

  test "events are grouped, filtered and sorted" do
    reference_date = Ecto.Date.from_erl {2016, 8, 15}
    all_events = for n <- -10..10 do
      # using description to test equality
      %Carbon.Event{description: "#{n}", date: Ecto.Date.from_erl({2016, 8, 15+n})}
    end

    { lt_events, gte_events } = Carbon.AccountView.events_summary(all_events, reference_date)

    assert ~w(-1 -2 -3 -4 -5) == Enum.map(lt_events, &(&1.description))
    assert ~w(4 3 2 1 0) == Enum.map(gte_events, &(&1.description))
  end

end
