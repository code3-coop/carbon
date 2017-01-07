defmodule Carbon.TimesheetView do
  import Ecto.Query, only: [from: 2]
  use Carbon.Web, :view

  def timesheet_status_select do
    Carbon.Repo.all from Carbon.TimesheetStatus, where: [active: true], order_by: [:id]
  end

  def ordered_project_list(header) do
    Enum.concat(header)
  end

  def header(timesheet) do
    timesheet.entries
    |> Enum.dedup_by(fn e -> {e.project.account.id, e.project.id} end)
    |> Enum.reduce([], &group_by_account/2)
  end

  defp group_by_account(entry, []), do: [[entry]]      
  defp group_by_account(entry, [ [head | _] = head_group | rest_groups] = entry_groups) do
    if entry.project.account.id == head.project.account.id do
      [[entry | head_group] | rest_groups]
    else
      [[entry] | entry_groups]
    end
  end

  def hour_sum_by(timesheet, date, project_id) do
    timesheet.entries
    |> Enum.filter(fn e -> e.project.id == project_id and Ecto.Date.compare(e.date, date) == :eq end)
    |> Enum.reduce(0, &(&1.duration_in_minutes + &2))
  end

  def date_range(timesheet) do
    Enum.map(0..13, &add_days(timesheet.start_date, &1))
  end

  defp add_days(ecto_date, 0), do: ecto_date
  defp add_days(ecto_date, nb_days) do
    Ecto.Date.from_erl(:calendar.gregorian_days_to_date(:calendar.date_to_gregorian_days(Ecto.Date.to_erl(ecto_date)) + nb_days))
  end
end
