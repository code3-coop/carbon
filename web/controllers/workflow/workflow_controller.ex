defmodule Carbon.Workflow.WorkflowController do
  use Carbon.Web, :controller
  alias Carbon.{ Workflow }

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
    join: st in assoc(w, :states),
    join: se in assoc(w, :sections),
    join: f in assoc(se, :fields),
    preload: [
      states: st,
      sections: {se, [
        fields: f
        ]}
    ],
    where: st.active,
    where: se.active,
    where: f.active

    workflows = query
    |> Repo.all()
    |> Repo.preload([:instances, :sections, :states])

    conn
    |> assign(:workflows, workflows)
    |> render("index.html")
  end

  def edit(conn, %{"id" => workflow_id}) do
    query = from w in Workflow,
      join: st in assoc(w, :states),
      join: se in assoc(w, :sections),
      join: f in assoc(se, :fields),
      preload: [
        states: st,
        sections: {se, [
          fields: f
          ]}
      ],
      where: w.id == ^workflow_id,
      where: st.active,
      where: se.active,
      where: f.active
    workflow = Repo.one(query)
    changeset = Workflow.changeset(workflow)

    conn
    |> assign(:workflow, workflow)
    |> assign(:changeset, changeset)
    |> render("edit.html")
  end

  def update(conn, %{"id" => workflow_id, "workflow" => workflow_params}) do
    workflow = Repo.get(Workflow, workflow_id) |> Repo.preload([:states])
    changeset = Workflow.changeset(workflow, workflow_params)
    max_index = Enum.max_by(workflow.states, &(&1.presentation_order_index)).presentation_order_index

    state_changesets =
      workflow_params["states_ids"]
      |> String.split(",")
      |> Enum.map(&String.to_integer/1)
      |> Enum.map(fn (id) -> Enum.find(workflow.states, &(&1.id == id)) end )
      |> Enum.with_index()
      |> Enum.map(fn({state, index}) -> {state, Ecto.Changeset.change(state, %{presentation_order_index: index})} end )
      |>Enum.reject(fn({_state, changeset}) -> Enum.empty?(changeset.changes) end)

    tr = Repo.transaction( fn ->
      Repo.update!(changeset)

      Enum.each state_changesets, fn({state, _state_changeset}) ->
        Repo.update! Ecto.Changeset.change( state, %{presentation_order_index: max_index + 1 + state.presentation_order_index})
      end
      Enum.each state_changesets, fn({_state, state_changeset}) ->
        Repo.update(state_changeset)
      end
    end)

    case tr do
      {:ok, _} ->
        conn
        |> put_flash(:info, "Workflow successfully updated")
        |> redirect(to: workflow_path(conn, :index))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> render("edit.html")
    end
  end

  def delete(_conn, _params) do

  end

end
