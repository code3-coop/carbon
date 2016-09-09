defmodule Carbon.Workflow.StateController do
  use Carbon.Web, :controller
  alias Carbon.{Workflow}
  alias Carbon.Workflow.{State}


  def new(conn, _params) do
    state = %State{}
    changeset = State.changeset(state, %{})
    conn
    |> assign(:changeset, changeset)
    |> render("new.html")
  end

  def create(conn, %{"workflow_id" => workflow_id, "state" => state_params}) do
    workflow = Repo.get(Workflow, workflow_id) |> Repo.preload([:states])
    max_index = Enum.reduce workflow.states, 0, &(max(&1.presentation_order_index, &2))
    state = %State{workflow: workflow, presentation_order_index: max_index + 1}
    changeset = State.changeset(state, state_params)
    case Repo.insert(changeset) do
      {:ok, _state} ->
        conn
        |> put_flash(:info, "State created successfully")
        |> redirect(to: workflow_path(conn, :edit, workflow_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> render("new.html")
    end
  end

  def delete(conn, %{"workflow_id" => workflow_id, "id" => state_id}) do
    state = Repo.get(State, state_id)
    changeset = State.changeset(state, %{active: false})
    case Repo.update changeset do
      {:ok, _state} ->
        conn
        |> put_flash(:info, "State was successfully deleted")
        |> redirect(to: workflow_path(conn, :edit, workflow_id))
      {:error, _changeset} ->
        conn
        |>put_flash(:info, "Failed to delete state")
        |> redirect(to: workflow_path(conn, :edit, workflow_id))
    end
  end
end
