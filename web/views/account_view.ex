defmodule Carbon.AccountView do
  use Carbon.Web, :view
  import Carbon.ViewHelpers, only: [account_status_select: 0, account_tags_select: 0, account_user_select: 0, humanize: 2, probability_color: 1]

  def match_table_to_color("account"), do: "blue"
  def match_table_to_color("event"),   do: "yellow"
  def match_table_to_color("contact"), do: "purple"
  def match_table_to_color("project"), do: "pink"
  def match_table_to_color(_model),    do: "grey"

  def icon_color_by_mimetype("application/vnd.ms-excel"), do: "file excel outline"
  def icon_color_by_mimetype("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"), do: "file excel outline"
  def icon_color_by_mimetype("application/msword"), do: "file word outline"
  def icon_color_by_mimetype("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), do: "file word outline"
  def icon_color_by_mimetype("application/vnd.ms-powerpoint"), do: "file powerpoint outline"
  def icon_color_by_mimetype("application/vnd.openxmlformats-officedocument.presentationml.presentation"), do: "file powerpoint outline"
  def icon_color_by_mimetype("application/pdf"), do: "file pdf outline"
  def icon_color_by_mimetype("application/x-gzip"), do: "file archive outline"
  def icon_color_by_mimetype("application/x-tar"), do: "file archive outline"
  def icon_color_by_mimetype("audio/" <> _), do: "file audio outline"
  def icon_color_by_mimetype("image/" <> _), do: "file image outline"
  def icon_color_by_mimetype("video/" <> _), do: "file video outline"
  def icon_color_by_mimetype("text/" <> _), do: "file text outline"
  def icon_color_by_mimetype(_), do: "file outline"

  def icon_name_by_mimetype("application/vnd.ms-excel"), do: "green"
  def icon_name_by_mimetype("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"), do: "green"
  def icon_name_by_mimetype("application/msword"), do: "blue"
  def icon_name_by_mimetype("application/vnd.openxmlformats-officedocument.wordprocessingml.document"), do: "blue"
  def icon_name_by_mimetype("application/vnd.ms-powerpoint"), do: "orange"
  def icon_name_by_mimetype("application/vnd.openxmlformats-officedocument.presentationml.presentation"), do: "orange"
  def icon_name_by_mimetype("application/pdf"), do: "red"
  def icon_name_by_mimetype(_), do: "grey"

  def events_summary(all_events, reference_date \\ :calendar.local_time |> elem(0) |> Ecto.Date.from_erl) do
    prev_events = all_events
                  |> Enum.filter(&lt_date(&1.date, reference_date))
                  |> Enum.sort_by(&(&1.date), &lte_date/2)
                  |> slice_right(5)
                  |> Enum.reverse
    next_events = all_events
                  |> Enum.filter(&gte_date(&1.date, reference_date))
                  |> Enum.sort_by(&(&1.date), &lte_date/2)
                  |> slice_left(5)
                  |> Enum.reverse

    { prev_events, next_events }
  end

  defp slice_left(list, len) when length(list) > len, do: Enum.slice(list, 0..len-1)
  defp slice_left(list, _len), do: list

  defp slice_right(list, len) when length(list) > len, do: Enum.slice(list, -len..-1)
  defp slice_right(list, _len), do: list

  defp lt_date(d1, d2) do
    case Ecto.Date.compare(d1, d2) do
      :lt -> true
      _ -> false
    end
  end
  defp gte_date(d1, d2) do
    case Ecto.Date.compare(d1, d2) do
      :lt -> false
      _ -> true
    end
  end
  defp lte_date(d1, d2) do
    case Ecto.Date.compare(d1, d2) do
      :gt -> false
      _ -> true
    end
  end

end
