defmodule Carbon.TimesheetEntryView do
  use Carbon.Web, :view
  import Carbon.ViewHelpers, only: [timehseet_entry_tags_select: 0]
  import Ecto.Query, only: [from: 1]


  def project_select do
    query = from p in Carbon.Project
    Carbon.Repo.all(query)
  end

  def account_select do
    query = from a in Carbon.Account
    Carbon.Repo.all(query)
  end

end
