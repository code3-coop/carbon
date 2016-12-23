defmodule Carbon.Workflow.SectionController do
  use Carbon.Web, :controller

  alias Carbon.Workflow
  alias Carbon.Workflow.Section

  def new(conn, _params) do
    section = %Section{}
    changeset = Section.changeset(section)
    conn
    |> assign(:changeset, changeset)
    |> render("new.html")
  end

  def create(conn, %{"workflow_id" => workflow_id, "section" => section_params}) do
    workflow = Repo.get(Workflow, workflow_id) |> Repo.preload([:sections])
    max_presentation_order_index = workflow.sections |> Enum.max_by(&get_presentation_order/1) |> get_presentation_order()
    section = %Section{workflow_id: String.to_integer(workflow_id), presentation_order_index: max_presentation_order_index + 1}
    changeset = Section.changeset(section, section_params)
    case Repo.insert(changeset) do
      {:ok, _section} ->
        redirect(conn, to: workflow_path(conn, :edit, workflow_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> render("new.html")

    end
  end

  defp get_presentation_order(section), do: section.presentation_order_index

  def delete(conn, %{"workflow_id" => workflow_id, "id" => section_id}) do
    section = Repo.get!(Section, section_id)
    changeset = Section.changeset(section, %{active: false})

    case Repo.update(changeset) do
      {:ok, section} ->
        conn
        |> put_flash(:archived_section, section)
        |> redirect(to: workflow_path(conn, :edit, workflow_id))
      {:error, _changeset} ->
        conn
        |> put_flash(:info, "Failed to archive section")
        |> render("edit.html")
    end

  end

  def restore(conn, %{"workflow_id" => workflow_id, "id" => section_id}) do
    section = Repo.get!(Section, section_id)
    changeset = Section.changeset(section, %{active: true})

    case Repo.update(changeset) do
      {:ok, _section} ->
        conn
        |> redirect(to: workflow_path(conn, :edit, workflow_id))
      {:error, _changeset} ->
        conn
        |> put_flash(:info, "Failed to restore section")
        |> render("edit.html")
    end
  end

  def edit(conn, %{"workflow_id" => _workflow_id, "id" => section_id }) do
    section = Repo.get(Section, section_id) |> Repo.preload([:fields])
    changeset = Section.changeset(section)

    conn
    |> assign(:changeset, changeset)
    |> assign(:section, section)
    |> render("edit.html")

  end

end
