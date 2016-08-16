defmodule Carbon.TagController do
  use Carbon.Web, :controller

  def index(conn, _params) do
    [
      { "account", Carbon.Account, Carbon.AccountTag },
      { "contact", Carbon.Contact, Carbon.ContactTag },
      { "event", Carbon.Event, Carbon.EventTag },
      { "deal", Carbon.Deal, Carbon.DealTag },
      { "project", Carbon.Project, Carbon.ProjectTag },
      { "timesheet", Carbon.TimesheetEntry, Carbon.TimesheetEntryTag },
    ]
    |> Enum.map(&Task.async(__MODULE__, :find_all, [&1]))
    |> Enum.flat_map(&Task.await/1)
    |> Enum.reduce(conn, &assign_resultset/2)
    |> render("index.html")
  end

  def new(conn, _params) do
    conn
  end

  def create(conn, _params) do
    conn
  end

  def edit(conn, %{"id" => tag_id, "tagged" => type}) do
    tag_module = type_to_module(type)
    tag = Repo.get!(tag_module, tag_id)
    conn
    |> assign(:tag, tag)
    |> assign(:changeset, tag_module.changeset(tag))
    |> assign(:tagged, type)
    |> render("edit.html")
  end

  def update(conn, %{"id" => tag_id, "tagged" => type} = params) do
    tag_params = params[type <> "_tag"]
    tag_module = type_to_module(type)
    tag = Repo.get!(tag_module, tag_id)
    changeset = tag_module.changeset(tag, tag_params)
    case Repo.update(changeset) do
      {:ok, _tag} ->
        conn
        |> put_flash(:success, "Tag successfully updated")
        |> redirect(to: tag_path(conn, :index))
      {:error, changeset} ->
        IO.inspect changeset
        conn
        |> put_flash(:error, "Error while updating tag")
        |> assign(:tag, tag)
        |> assign(:changeset, changeset)
        |> assign(:tagged, type)
        |> redirect(to: tag_path(conn, :edit))
    end
  end

  def delete(conn, %{"id" => tag_id, "tagged" => type}) do
    tag = Repo.get!(type_to_module(type), tag_id) |> Ecto.Changeset.change(active: false)
    case Repo.update(tag) do
      {:ok, tag} ->
        conn
        |> put_flash(:success, "Tag successfully deleted")
        |> put_flash(:restore_link, tag_path(conn, :restore, tag.id, tagged: type))
        |> redirect(to: tag_path(conn, :index))
      {:error, _changeset} ->
        conn
        |> put_flash(:info, "Failed to delete tag.")
        |> redirect(to: tag_path(conn, :index))
    end
  end

  def restore(conn, %{"id" => tag_id, "tagged" => type}) do
    tag = Repo.get!(type_to_module(type), tag_id) |> Ecto.Changeset.change(active: true)
    case Repo.update(tag) do
      {:ok, _tag} ->
        conn
        |> put_flash(:success, "Tag successfully restored")
        |> redirect(to: tag_path(conn, :index))
      {:error, _changeset} ->
        conn
        |> put_flash(:info, "Failed to restore tag.")
        |> redirect(to: tag_path(conn, :index))
    end
  end

  def find_all({ name, module, tag_module }) do
    [
      { name <> "_tags", Repo.all(find_all_query tag_module) },
      { name <> "_tag_occurs", Repo.all(find_occurs_query module) |> Enum.into(%{}) }
    ]
  end

  defp assign_resultset({key, value}, conn) do
    assign(conn, String.to_atom(key), value)
  end

  defp find_all_query(tag_module) do
    from tag_module,
      where: [ active: true ],
      order_by: fragment("lower(description)")
  end

  defp find_occurs_query(module) do
    from m in module,
      left_join: t in assoc(m, :tags),
      where: m.active == true and t.active == true,
      select: { t.id, count(t.id) },
      group_by: [ t.id ]
  end

  defp type_to_module("account"), do: Carbon.AccountTag
  defp type_to_module("contact"), do: Carbon.ContactTag
  defp type_to_module("deal"), do: Carbon.DealTag
  defp type_to_module("event"), do: Carbon.EventTag
  defp type_to_module("project"), do: Carbon.ProjectTag
  defp type_to_module("timesheet"), do: Carbon.TimesheetEntryTag
end
