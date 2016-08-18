defmodule Carbon.TimesheetView do
  import Ecto.Query, only: [from: 2]
  use Carbon.Web, :view

  def timesheet_status_select do
    Carbon.Repo.all from Carbon.TimesheetStatus, where: [active: true], order_by: [:id]
  end

end
