defmodule Carbon.Workflow.WorkflowController do
  use Carbon.Web, :controller
  alias Carbon.{ Account, User, Workflow }

  def index(conn, _params) do
    query = from w in Workflow,
      where: w.active

    workflows = query
    |> Repo.all()
    |> Repo.preload([:instances, :sections, :states])

    conn
    |> assign(:workflows, workflows)
    |> render("index.html")
  end

end
