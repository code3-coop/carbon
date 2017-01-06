defmodule Carbon.Workflow.FieldController do
  use Carbon.Web, :controller
  alias Carbon.Workflow.Field

  def delete(conn, %{"workflow_id" => workflow_id, "section_id" => section_id, "id" => field_id})do
    query = from f in Field, where: f.id == ^field_id
    case Repo.update_all(query, set: [active: false]) do
      {1, nil} ->
        conn
        |> put_flash(:archived_workflow_field, Repo.one!(query))
        |> redirect(to: workflow_section_path(conn, :edit, workflow_id, section_id))
      true ->
        conn
        |> put_flash(:info, "Failed to archive workflow field")
        |> render("show.html")
    end
  end
  def restore(conn, %{"workflow_id" => workflow_id, "section_id" => section_id, "id" => field_id}) do
    query = from f in Field, where: f.id == ^field_id
    case Repo.update_all(query, set: [active: true]) do
      {1, nil} ->
        conn
        |> redirect(to: workflow_section_path(conn, :edit, workflow_id, section_id))
      true ->
        conn
        |> put_flash(:info, "Failed to restore workflow field")
        |> redirect(to: workflow_section_path(conn, :edit, workflow_id, section_id))
    end

  end

  def edit(conn, %{"id"=> field_id}) do
    query = from f in Field, where: f.id == ^field_id
    field = Repo.one!(query)
    changeset = Field.changeset(field)
    conn
    |> assign(:changeset, changeset)
    |> assign(:field, field)
    |> render("edit.html")
  end

  # udpate need to be done
  # def udpate(conn, %{"id" => field_id}) do
  #
  # end

end
