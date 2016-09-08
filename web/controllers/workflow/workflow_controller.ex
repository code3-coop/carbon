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

  def edit(conn, %{"id" => workflow_id}) do
    workflow = Repo.get(Workflow, workflow_id) |> Repo.preload([:states, sections: [:fields]])
    changeset = Workflow.changeset(workflow)

    conn
    |> assign(:workflow, workflow)
    |> assign(:changeset, changeset)
    |> render("edit.html")
  end

  def update(conn, %{"id" => workflow_id, "workflow" => workflow_params}) do
    workflow = Repo.get(Workflow, workflow_id)
    changeset = Workflow.changeset(workflow, workflow_params)
    case Repo.update(changeset) do
      {:ok, _workflow} ->
        conn
        |> put_flash(:info, "Workflow successfully updated")
        |> redirect(to: workflow_path(conn, :index))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> render("edit.html")
    end
  end

end
