defmodule Carbon.Workflow.SectionController do
  use Carbon.Web, :controller

  alias Carbon.{ Account, User, Workflow }
  alias Carbon.Workflow.{ Section, Value, Field}

  def new(conn, _params) do
    section = %Section{}
    changeset = Section.changeset(section)
    conn
    |> assign(:changeset, changeset)
    |> render("new.html")
  end

  def create(conn, %{"workflow_id" => workflow_id, "section" => section_params}) do
    workflow = Repo.get(Workflow, workflow_id) |> Repo.preload([:sections])
    # IO.inspect (hd workflow.sections)
    max_presentation_order_index = workflow.sections |> Enum.max_by(&get_presentation_order/1) |> get_presentation_order()
    # IO.inspect max_presentation_order_index
    section = %Section{workflow_id: String.to_integer(workflow_id), presentation_order_index: max_presentation_order_index + 1}
    changeset = Section.changeset(section, section_params)
    case Repo.insert(changeset) do
      {:ok, section} ->
        redirect(conn, to: workflow_path(conn, :edit, workflow_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> render("new.html")

    end
  end
  defp get_presentation_order(section), do: section.presentation_order_index

end
