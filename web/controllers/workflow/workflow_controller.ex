defmodule Carbon.Workflow.WorkflowController do
  use Carbon.Web, :controller
  alias Carbon.{ Account, User, Workflow }

  def new(conn, _params) do
    workflow = %Workflow{}
    changeset = Workflow.changeset(workflow)
    conn
      |> assign(:changeset, changeset)
      |> render("new.html")
  end

  def create(conn, %{"workflow" => workflow_params}) do
    changeset = Workflow.changeset(%Workflow{}, workflow_params)
    case Repo.insert(changeset) do
      {:ok, workflow} ->
        conn
        |> put_flash(:info, "Workflow was successfully created")
        |> redirect(to: workflow_path(conn, :edit, workflow.id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> render("new.html")
    end
  end

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
