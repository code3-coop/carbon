defmodule Carbon.Workflow.SectionController do
  use Carbon.Web, :controller

  alias Carbon.Workflow
  alias Carbon.Workflow.Section
  alias Carbon.Workflow.Field

  def new(conn, _params) do
    section = %Section{}
    changeset = Section.changeset(section)
    conn
    |> assign(:changeset, changeset)
    |> render("new.html")
  end

  def create(conn, %{"workflow_id" => workflow_id, "section" => section_params}) do
    workflow = Repo.get(Workflow, workflow_id) |> Repo.preload([:sections])

    max_presentation_order_index = max_prentation_order(workflow)
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

  defp max_prentation_order(%{sections: []}), do: 0
  defp max_prentation_order(%{sections: sections}) do
    sections
    |> Enum.max_by(&get_presentation_order/1)
    |> get_presentation_order()
  end

  defp get_presentation_order(section), do: section.presentation_order_index

  def delete(conn, %{"workflow_id" => workflow_id, "id" => section_id}) do
    section = Repo.get!(Section, section_id) |> Repo.preload(:fields)
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
    section = Repo.get!(Section, section_id) |> Repo.preload(:fields)
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

  def edit(conn, %{"workflow_id" => workflow_id, "id" => section_id }) do

    query = from s in Section,
    left_join: f in assoc(s, :fields),
    preload: [fields: f],
    where: f.active or is_nil(f.id),
    where: s.id == ^section_id


    section = Repo.one(query)

    changeset = Section.changeset(section)

    conn
    |> assign(:changeset, changeset)
    |> assign(:section, section)
    |> assign(:section_id, section_id)
    |> assign(:workflow_id, workflow_id)
    |> render("edit.html")

  end

  def update(conn, %{"workflow_id" => workflow_id, "id" => section_id, "section" => section_params}) do

    section = Repo.get!(Section, section_id) |> Repo.preload([:fields])
    changeset = Section.changeset(section, section_params)
    tr = Repo.transaction( fn ->
      Repo.update!(changeset)
      Ecto.Adapters.SQL.query! Carbon.Repo, "set constraints workflow_fields_presentation_order_index_section_id_key deferred ;"

      update_fields_orders(section_params["fields_ids"])

    end)

    case tr do
      {:ok, _} ->
        conn
        |> put_flash(:info, "Section successfully updated")
        |> redirect(to: workflow_path(conn, :edit, workflow_id))
    end
  end

  defp update_fields_orders(""), do: :ok
  defp update_fields_orders(fields_ids) do
    fields_ids
    |> String.split(",")
    |> Enum.map(&String.to_integer/1)
    |> Enum.with_index()
    |> Enum.map(fn({field_id, index}) -> {index, from(s in Field, where: s.id == ^field_id)} end)
    |> Enum.each(fn({index, query}) -> Repo.update_all(query, [set: [presentation_order_index: index]]) end)
  end

end
