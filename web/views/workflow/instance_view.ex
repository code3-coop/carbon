defmodule Carbon.Workflow.InstanceView do
  use Carbon.Web, :view
  import Ecto.Query, only: [from: 2]
  alias Carbon.{ Repo }

  alias Carbon.Workflow.{ Field, State }
  alias Carbon.{Account, User, Timesheet, Workflow}

  def user_select() do
    query = from u in User,
      where: u.active,
      select: %{id: u.id, full_name: u.full_name, image_url: u.image_url}
    Repo.all(query)
  end

  def timesheet_select() do
    query = from t in Timesheet,
      where: t.active,
      preload: [:status, :user]
    Repo.all(query)
  end

  def workflow_select() do
    # query = from w in Workflow
    Repo.all(Workflow)
  end

  def workflow_states_select() do
    # query = from w in Workflow
    Repo.all(State)
  end

  def account_select() do
    query = from a in Account,
      where: a.active,
      preload: [:status]
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

  def instance_match_params(instance, conn) do
    accepted_workflow_values = [nil, "", to_string(instance.workflow_id)]
    accepted_state_values = [nil, "", to_string(instance.state_id)]
    Enum.member?(accepted_workflow_values, conn.params["workflow"])
    and Enum.member?(accepted_state_values, conn.params["state"])
  end


end
