defmodule Carbon.Workflow.InstanceController do
  use Carbon.Web, :controller

  alias Carbon.{ Account, User, Workflow }
  alias Carbon.Workflow.{ Instance }

  def index(conn, _params) do
    query = from i in Instance,
      preload: [
        :workflow,
        :state,
        [values: :field]
      ]
    instances = Repo.all(query)
    
    references = instances
    |> Enum.flat_map(&(&1.values))
    |> Enum.reduce(%{}, &accumulate_ids/2)

    [ { _, accounts }, { _, users } ] = Task.yield_many [
      create_fetch_task(Account, Map.get(references, :account_ids)),
      create_fetch_task(User, Map.get(references, :user_ids))
    ]

    workflows = Repo.all(from w in Workflow, preload: :states)

    conn
    |> assign(:workflows, workflows)
    |> assign(:instances, instances)
    |> assign(:accounts, accounts)
    |> assign(:users, users)
    |> render("index.html")
  end

  defp accumulate_ids(%{ "integer_value" => v, "field" => %{ "type" => "reference", "entity_reference_name" => "Carbon.Account" } }, acc) do
    Map.update(acc, :account_ids, [v], &([ &1 | v ]))
  end
  defp accumulate_ids(%{ "integer_value" => v, "field" => %{ "type" => "reference", "entity_reference_name" => "Carbon.User" } }, acc) do
    Map.update(acc, :user_ids, [v], &([ &1 | v ]))
  end
  defp accumulate_ids(_value, acc), do: acc

  defp create_fetch_task(_, []) do
    Task.async(fn -> nil end)
  end
  defp create_fetch_task(module, ids) do
    Task.async(Repo, :all, [(from i in module, where: i.id in ^ids)])
  end
end
