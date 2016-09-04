defmodule Carbon.Trigger do
  alias Carbon.{ Activity, Repo, Rule }
  alias Carbon.Workflow.{ Instance, Value, Field }
  import Ecto.Query, only: [from: 2]

  @spec fire(%Activity{}, %{optional(atom) => term}) :: Ecto.Schema.t | no_return
  def fire(activity, changes) do
    changes
    |> Enum.filter(&only_allowed_fields(activity.entity_name, &1))
    |> Enum.map(&create_query(activity, &1))
    |> Enum.map(&Task.async(Repo, :all, [&1]))
    |> Enum.flat_map(&Task.await/1)
    |> Enum.uniq_by(&(&1.id))
    |> Enum.map(&instantiate_workflow(activity, &1))
    |> insert_instances
    |> update_activity(activity)
  end

  @spec only_allowed_fields(String.t, {atom, term}) :: boolean
  defp only_allowed_fields(entity, {field, _value}) do
    Rule.allowed_entities
    |> Map.get(entity, [])
    |> Enum.member?(to_string(field))
  end

  @spec create_query(%Activity{}, {atom, term}) :: Ecto.Queryable.t
  defp create_query(%Activity{action: "update"} = activity, {field, value}) do
    from r in base_query(activity),
      where: r.field == ^to_string(field),
      where: r.value == ^value
  end
  defp create_query(activity, _), do: base_query(activity)

  @spec base_query(%Activity{}) :: Ecto.Queryable.t
  defp base_query(activity) do
    from r in Rule,
      where: r.action == ^activity.action,
      where: r.entity == ^activity.entity_name,
      where: r.active,
      preload: [ workflow: [ :states, sections: [ :fields ] ] ]
  end

  @spec instantiate_workflow(%Activity{}, %Rule{}) :: %Instance{}
  defp instantiate_workflow(activity, rule) do
    initial_state = rule.workflow.states |> Enum.sort_by(&(&1.presentation_order_index)) |> hd
    instance = %Instance{workflow: rule.workflow, state: initial_state, values: []}

    rule.workflow.sections
    |> Enum.flat_map(&(&1.fields))
    |> Enum.filter(&only_initializable_references/1)
    |> Enum.reduce(instance, &initialize_field(activity, &1, &2))
  end

  @spec only_initializable_references(%Field{}) :: boolean
  defp only_initializable_references(field) do
    Field.reference_account(field) or Field.reference_timesheet(field)
  end

  @spec initialize_field(%Activity{}, %Field{}, %Instance{}) :: %Instance{}
  defp initialize_field(activity, field, instance) do
    case { field.entity_reference_name, activity.entity_name } do
      { "Carbon.Account", "account" } -> add_value_to_instance(instance, field, activity.entity_id)
      { "Carbon.Timesheet", "timesheet" } -> add_value_to_instance(instance, field, activity.entity_id)
      _ -> instance
    end
  end

  @spec add_value_to_instance(%Instance{}, %Field{}, integer) :: %Instance{}
  defp add_value_to_instance(instance, field, id) do
    value = %Value{field: field, integer_value: id }
    %{ instance | values: [ value | instance.values ] }
  end

  @spec insert_instances(list(%Instance{})) :: String.t
  defp insert_instances([]), do: "noop"
  defp insert_instances(instances) do
    Repo.transaction(fn -> Enum.map(instances, &Repo.insert(&1)) end) |> elem(0)
  end

  @spec update_activity(String.t, %Activity{}) :: Ecto.Schema.t | no_return
  defp update_activity(trigger_status, activity) do
    Repo.update! Activity.changeset(activity, %{ trigger_status: to_string(trigger_status) })
  end
end
