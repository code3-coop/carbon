defmodule Carbon.AccountView do
  use Carbon.Web, :view
  import Ecto.Query, only: [from: 2]

  def match_table_to_color("account"), do: "blue"
  def match_table_to_color("event"), do: "yellow"
  def match_table_to_color("contact"), do: "purple"
  
  def events_summary(all_events) do
    test_date = Ecto.DateTime.from_erl(:calendar.local_time) |> Ecto.DateTime.to_date
    events_by_date = Enum.group_by(all_events, &Ecto.DateTime.to_date(&1.date))
    all_dates = Map.keys(events_by_date)
    { past_dates, future_dates } = Enum.partition(all_dates, &by_date(&1, test_date))

    [ past: take_event_in_range(past_dates, -5..-1, events_by_date),
      future: take_event_in_range(future_dates, 0..4, events_by_date) ]
  end

  defp take_event_in_range(date_list, range, events_by_date) do
    date_list
    |> Enum.sort(&by_date/2)
    |> Enum.slice(range)
    |> Enum.flat_map(&(events_by_date[&1]))
    |> Enum.sort(&by_event_date_desc/2)
  end

  def account_status_select do
    query = from s in Carbon.AccountStatus,
      select: {s.key, s.id},
      order_by: s.id
    Carbon.Repo.all query
  end

  def account_tags_select do
    query = from at in Carbon.AccountTag,
      order_by: at.id
    Carbon.Repo.all query
  end

  def account_user_select do
    query = from u in Carbon.User,
      select: %{full_name: u.full_name, id: u.id, image_url: u.image_url},
      order_by: u.id
    Carbon.Repo.all query
  end


  defp by_date(d1, d2) do
    case Ecto.Date.compare(d1, d2) do
      :lt -> true
      _ -> false
    end
  end
  defp by_event_date_desc(e1, e2) do
    case Ecto.DateTime.compare(e2.date, e1.date) do
      :lt -> true
      _ -> false
    end
  end

end
