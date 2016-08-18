defmodule Carbon.TimesheetEntryView do
  use Carbon.Web, :view
  import Carbon.ViewHelpers, only: [timehseet_entry_tags_select: 0]
  import Ecto.Query, only: [from: 2]


  def project_select do
    query = from p in Carbon.Project,
      order_by: p.id,
      left_join: a in assoc(p, :account),
      preload: [account: a]
    Carbon.Repo.all(query)
  end

end
