defmodule Carbon.Workflow.WorkflowController do
  use Carbon.Web, :controller
  alias Carbon.{ Workflow }
  alias Carbon.Workflow.{ State, Section }

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
    left_join: st in assoc(w, :states),
    left_join: se in assoc(w, :sections),
    left_join: f in assoc(se, :fields),
    preload: [
      states: st,
      sections: {se, [
        fields: f
        ]}
    ],
    where: st.active or is_nil(st.id),
    where: se.active or is_nil(se.id),
    where: f.active or is_nil(f.id)

    workflows = query
    |> Repo.all()
    |> Repo.preload([:instances, :sections, :states])

    conn
    |> assign(:workflows, workflows)
    |> render("index.html")
  end

  def edit(conn, %{"id" => workflow_id}) do
    query = from w in Workflow,
      left_join: st in assoc(w, :states),
      left_join: se in assoc(w, :sections),
      left_join: f in assoc(se, :fields),
      preload: [
        states: st,
        sections: {se, [
          fields: f
          ]}
      ],
      where: w.id == ^workflow_id,
      where: st.active or is_nil(st.id),
      where: se.active or is_nil(se.id),
      where: f.active or is_nil f.id # the last clause is requried in order to obtain the sections witout active fields
    workflow = Repo.one!(query)
    changeset = Workflow.changeset(workflow)

    conn
    |> assign(:workflow, workflow)
    |> assign(:changeset, changeset)
    |> render("edit.html")
  end

  def update(conn, %{"id" => workflow_id, "workflow" => workflow_params}) do
    workflow = Repo.get(Workflow, workflow_id) |> Repo.preload([:states])
    changeset = Workflow.changeset(workflow, workflow_params)

    tr = Repo.transaction( fn ->
      Ecto.Adapters.SQL.query! Carbon.Repo, "set constraints workflow_states_presentation_order_index_workflow_id_key deferred ;"
      Ecto.Adapters.SQL.query! Carbon.Repo, "set constraints workflow_sections_presentation_order_index_workflow_id_key deferred ;"

      Repo.update!(changeset)

      workflow_params["states_ids"]
      |> String.split(",")
      |> Enum.map(&String.to_integer/1)
      |> Enum.with_index()
      |> Enum.map(fn({state_id, index}) -> {index, from(s in State, where: s.id == ^state_id)} end)
      |> Enum.each(fn({index, query}) -> Repo.update_all(query, [set: [presentation_order_index: index]]) end)

      workflow_params["sections_ids"]
      |> String.split(",")
      |> Enum.map(&String.to_integer/1)
      |> Enum.with_index()
      |> Enum.map(fn({section_id, index}) -> {index, from(s in Section, where: s.id == ^section_id)} end)
      |> Enum.each(fn({index, query}) -> Repo.update_all(query, [set: [presentation_order_index: index]]) end)

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
