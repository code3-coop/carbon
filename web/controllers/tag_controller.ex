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
end
