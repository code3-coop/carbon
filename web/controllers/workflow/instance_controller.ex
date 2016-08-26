defmodule Carbon.Workflow.InstanceController do
  use Carbon.Web, :controller

  alias Carbon.{ Account, User, Workflow }
  alias Carbon.Workflow.{ Instance, Value, Field }

  def index(conn, _params) do
    fetch_workflows = Task.async Repo, :all, [(from w in Workflow, preload: :states)]

    query = from i in Instance, preload: [ :workflow, :state, [ values: :field ] ]
    instances = Repo.all(query)
    
    references = instances
    |> Enum.flat_map(&(&1.values))
    |> Enum.reduce(%{}, &accumulate_ids/2)

    [ { _pid1, { :ok, accounts } }, { _pid2, { :ok, users } } ] = Task.yield_many [
      create_fetch_task(Account, Map.get(references, :account_ids)),
      create_fetch_task(User, Map.get(references, :user_ids))
    ]

    conn
    |> assign(:workflows, Task.await(fetch_workflows))
    |> assign(:instances, instances)
    |> assign(:accounts, accounts)
    |> assign(:users, users)
    |> render("index.html")
  end

  defp accumulate_ids(%Value{ integer_value: v, field: %Field{ type: "reference", entity_reference_name: "Carbon.Account" } }, acc) do
    Map.update(acc, :account_ids, [v], &([ v | &1 ]))
  end
  defp accumulate_ids(%Value{ integer_value: v, field: %Field{ type: "reference", entity_reference_name: "Carbon.User" } }, acc) do
    Map.update(acc, :user_ids, [v], &([ v | &1 ]))
  end
  defp accumulate_ids(_value, acc), do: acc

  defp create_fetch_task(_, nil) do
    Task.async(fn -> [] end)
  end
  defp create_fetch_task(module, ids) do
    Task.async(Repo, :all, [(from i in module, where: i.id in ^(ids |> MapSet.new |> MapSet.to_list))])
  end
end
