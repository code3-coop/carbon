defmodule Carbon.Workflow.InstanceView do
  use Carbon.Web, :view
  import Ecto.Query, only: [from: 2]
  alias Carbon.{ Repo }

  alias Carbon.Workflow.{ Field }
  alias Carbon.{Account, User, Timesheet}

  def user_select() do
    query = from u in User,
      where: u.active,
      select: %{id: u.id, full_name: u.full_name}
    Repo.all(query)
  end

  def timesheet_select() do
    query = from t in Timesheet,
      where: t.active,
      preload: [:status, :user]
    Repo.all(query)
  end

  def account_select() do
    query = from a in Account,
      where: a.active
    Repo.all(query)
  end

  def account_by_id(id) do
    Repo.get(Account, id)
  end

  def user_by_id(id) do
    Repo.get(User, id)
  end

  def timesheet_by_id(id) do
    Repo.get(Timesheet, id) |> Repo.preload([:status, :user])
  end


end
