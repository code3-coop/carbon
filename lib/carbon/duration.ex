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
    if String.match?(duration_string, ~r/^\d+(?:\.\d+)?(?i:[mhd])$/) do
      [ value_string, unit ] = String.split_at(duration_string, -1) # consider String.split(~r/(?=[mhd]$)/i)
      { value, _ } = Float.parse value_string
      value |> in_minutes(String.downcase(unit)) |> round
    else
      0
    end
  end

  defp in_minutes(value, "m"), do: value
  defp in_minutes(value, "h"), do: value * 60
  defp in_minutes(value, "d"), do: value * @work_hours_per_day * 60
end
