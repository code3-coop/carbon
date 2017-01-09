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

  def date_range(timesheet) do
    Enum.map(0..13, &add_days(timesheet.start_date, &1))
  end

  def add_days(ecto_date, 0), do: ecto_date
  def add_days(ecto_date, nb_days) do
    Ecto.Date.from_erl(:calendar.gregorian_days_to_date(:calendar.date_to_gregorian_days(Ecto.Date.to_erl(ecto_date)) + nb_days))
  end

  def sum_hours_by_date_and_project_id(timesheet, date, project_id) do
    timesheet.entries
    |> filter_by_date(date)
    |> filter_by_project_id(project_id)
    |> sum_duration
  end

  def sum_hours_by_date(timesheet, date) do
    timesheet.entries
    |> filter_by_date(date)
    |> sum_duration
  end

  def sum_hours_by_project_id(timesheet, project_id) do
    timesheet.entries
    |> filter_by_project_id(project_id)
    |> sum_duration
  end

  def sum_hours(timesheet) do
    timesheet.entries
    |> sum_duration
  end

  def notes_by_date_and_project_id(timesheet, date, project_id) do
    timesheet.entries
    |> filter_by_date(date)
    |> filter_by_project_id(project_id)
    |> Enum.map(& &1.notes)
    |> Enum.reject(& &1 == "")
  end

  defp filter_by_date(entries, date) do
    entries |> Enum.filter(fn e -> Ecto.Date.compare(e.date, date) == :eq end)
  end

  defp filter_by_project_id(entries, project_id) do
    entries |> Enum.filter(fn e -> e.project.id == project_id end)
  end

  defp sum_duration(entries) do
    entries |> Enum.reduce(0, &(&1.duration_in_minutes + &2))
  end

  def in_hours(minutes), do: minutes / 60

  def no_zeros(0.0), do: ""
  def no_zeros(hours), do: :io_lib.format("~.2f", [hours])
end
