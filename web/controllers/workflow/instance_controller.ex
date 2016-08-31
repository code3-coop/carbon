defmodule Carbon.Workflow.InstanceController do
  use Carbon.Web, :controller

  alias Ecto.Multi
  alias Carbon.{ Account, User, Workflow }
  alias Carbon.Workflow.{ Instance, Value, Field }

  def index(conn, _params) do
    fetch_workflows = Task.async Repo, :all, [(from w in Workflow, preload: :states)]

    instances = Repo.all from i in Instance, preload: [ :workflow, :state, [ values: :field ] ]

    { accounts, users } = instances
    |> Enum.flat_map(&(&1.values))
    |> Enum.reduce(%{}, &accumulate_ids/2)
    |> fetch_entities_by_id

    conn
    |> assign(:instances, instances)
    |> assign(:accounts, Enum.reduce(accounts, %{}, &Map.put(&2, &1.id, &1)))
    |> assign(:users, Enum.reduce(users, %{}, &Map.put(&2, &1.id, &1)))
    |> assign(:workflows, Task.await(fetch_workflows))
    |> render("index.html")
  end

  defp accumulate_ids(%Value{ integer_value: v, field: %Field{ type: "reference", entity_reference_name: "Carbon.Account" } }, acc) do
    Map.update(acc, :account_ids, [v], &([ v | &1 ]))
  end
  defp accumulate_ids(%Value{ integer_value: v, field: %Field{ type: "reference", entity_reference_name: "Carbon.User" } }, acc) do
    Map.update(acc, :user_ids, [v], &([ v | &1 ]))
  end
  defp accumulate_ids(_value, acc), do: acc

  @spec fetch_entities_by_id(%{optional(:account_ids) => list(integer), optional(:user_ids) => list(integer)}) :: { list(%Account{}), list(%User{}) }
  defp fetch_entities_by_id(references) do
    [
      create_fetch_task(Account, Map.get(references, :account_ids)),
      create_fetch_task(User, Map.get(references, :user_ids))
    ]
    |> Task.yield_many
    |> extract_references
  end

  defp create_fetch_task(_, nil) do
    Task.async(fn -> [] end)
  end
  defp create_fetch_task(module, ids) do
    Task.async(Repo, :all, [(from i in module, where: i.id in ^(ids |> MapSet.new |> MapSet.to_list))])
  end

  defp extract_references([ { _, { :ok, accounts } }, { _, { :ok, users } } ]), do: { accounts, users }
  defp extract_references([ { _, { :error, _ } }    , { _, { :ok, users } } ]), do: { [], users }
  defp extract_references([ { _, { :ok, accounts } }, { _, { :error, _ } } ]) , do: { accounts, [] }
  defp extract_references([ { _, { :error, _ } }    , { _, { :error, _ } } ]) , do: { [], [] }

  def show(conn, %{ "id" => instance_id }) do
    instance = Repo.one from i in Instance, where: i.id == ^instance_id, preload: [:values, workflow: [:states, sections: [fields: [:enums]]]]
    conn
    |> assign(:instance, instance)
    |> render("show.html")
  end

  def edit(conn, %{"id" => instance_id}) do
    instance = Repo.get(Instance, instance_id) |> Repo.preload([:values, :state, workflow: [:states, sections: [ :fields ]]])
    changeset = Instance.changeset(instance, %{})

    conn
    |> assign(:instance, instance)
    |> assign(:changeset, changeset)
    |> render("edit.html")
  end

  def update(conn, %{"id" => instance_id, "instance" => instance_params}) do
    instance = Repo.get(Instance, instance_id) |> Repo.preload([:state, values: [:field]])
    changeset = Instance.changeset(instance, instance_params)

    values_changesets = Enum.map instance.values, fn old_value ->
      new_value_as_string = instance_params[to_string(old_value.field_id)]
      type = old_value.field.type
      cond do
        Enum.member? ["text", "long_text"], type ->
          {old_value, Value.changeset(old_value, %{string_value: new_value_as_string})}
        type == "integer" or type == "reference" or type == "currency" ->
          {old_value, Value.changeset(old_value, %{integer_value: String.to_integer(new_value_as_string)})}
        type == "date" ->
          {old_value, Value.changeset(old_value, %{date_value: new_value_as_string})}
        type == "boolean" ->
          {old_value, Value.changeset(old_value, %{boolean_value: new_value_as_string == "true"})}
      end
    end

    multi = Multi.new
    |> Multi.update(:instance, changeset)
    |> apply_multiple_changeset_to_multi(values_changesets)

    case Repo.transaction(multi) do
      {:ok, instance} ->
        conn
        |> put_flash(:info, "Workflow instance updated with success")
        |> redirect(to: instance_path(conn, :index))
      {:error, changeset} ->
        conn
        |> put_flash(:info, "Failed to update workflow instance")
        |> assign(:changeset, changeset)
        |> assign(:instance, instance)
        |> render("edit.html")
    end
  end

  defp apply_multiple_changeset_to_multi(multi, changesets) do
    Enum.reduce changesets, multi, fn({old_value, changeset}, multi) ->
      Multi.update(multi, old_value.field_id, changeset)
    end
  end

end
