defmodule Carbon.Duration do

  @work_hours_per_day 7

  @doc """
  Parses a duration description. Returns the corresponding number of minutes as
  as integer. Duration descriptions are given in numeric value followed by a
  unit descriptor such as "m", "h", or "d".

  ## Examples

      iex> Carbon.Duration.parse_minutes("30m")
      30

      iex> Carbon.Duration.parse_minutes("1.5h")
      90

      iex> Carbon.Duration.parse_minutes("1d")
      420
  """
  def parse_minutes(duration_string) do
    if String.match?(duration_string, ~r/^\d{1,4}(?:\.\d{1,2})?[mhd]$/) do
      { value_string, unit } = String.split_at(duration_string, -1) # consider String.split(~r/(?=[mhd]$)/i)
      { value, _ } = Float.parse value_string
      value |> in_minutes(unit) |> round
    else
      0
    end
  end

  defp in_minutes(value, "m"), do: value
  defp in_minutes(value, "h"), do: value * 60
  defp in_minutes(value, "d"), do: value * @work_hours_per_day * 60

  @doc """
  Format a duration in minutes to a human readble string. Returns a string in the Format
  "1.5h", "30m", "2.5d". There will never be more than one unit at the time.
  This function is the opposite of Carbon.Duration.parse_minutes/1

  ## Examples

      iex> Carbon.Duration.format_minutes(30)
      "30m"

      iex> Carbon.Duration.format_minutes(90)
      "1.5h"

      iex> Carbon.Duration.format_minutes(420)
      "1d"
  """
  def format_minutes(duration_in_minutes) do
    days = duration_in_minutes / (60 * @work_hours_per_day)
    hours = duration_in_minutes / 60

    cond do
      days < 1  -> "#{Float.round(days, 2)}d"
      hours < 1 -> "#{Float.round(hours, 2)}h"
      true     -> "#{duration_in_minutes}m"
    end
  end
end
