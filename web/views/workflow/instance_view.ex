defmodule Carbon.Workflow.InstanceView do
  use Carbon.Web, :view
  import Ecto.Query, only: [from: 2]

  alias Carbon.Workflow.{ Field }
  alias Carbon.{Account, User, Timesheet}

  def user_select() do
    query = from u in User,
      where: u.active,
      select: %{id: u.id, full_name: u.full_name}
    Carbon.Repo.all(query)
  end

  def timesheet_select() do
    query = from t in Timesheet,
      where: t.active,
      preload: [:status, :user]
    Carbon.Repo.all(query)
  end

  def account_select() do
    query = from a in Account,
      where: a.active
    Carbon.Repo.all(query)
  end

end
