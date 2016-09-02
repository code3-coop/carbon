defmodule Carbon.Trigger do
  alias Carbon.{ Repo, Activity, TriggerRule }
  alias Carbon.Workflow.{ Instance, Value, Field }
  import Ecto.Query, only: [from: 2]

  def start(activity, changes) do
    spawn __MODULE__, :check, [activity, changes]
  end

  def check(activity, changes) do
    changes
    |> Enum.filter(&only_allowed_fields(activity.target_schema, &1))
    |> Enum.map(&create_query(activity, &1))
    |> Enum.map(&Task.async(Repo, :all, [&1]))
    |> Enum.flat_map(&Task.await/1)
    |> Enum.uniq_by(&(&1.id))
    |> Enum.map(&instantiate_workflow(activity, &1))
    |> Enum.map(&Repo.insert(&1))
  end

  defp only_allowed_fields(entity, {field, _value}) do
    TriggerRule.allowed_entities
    |> Map.get(entity, [])
    |> Enum.member?(to_string(field))
  end

  defp create_query(%Activity{action: "update"} = activity, {field, value}) do
    from r in base_query(activity),
      where: r.field == ^to_string(field),
      where: r.value == ^value
  end
  defp create_query(activity, _) do
    base_query(activity)
  end
  defp base_query(activity) do
    from r in TriggerRule,
      where: r.action == ^activity.action,
      where: r.entity == ^activity.target_schema,
      where: r.active,
      preload: [ workflow: [ :states, sections: [ :fields ] ] ]
  end

  defp instantiate_workflow(activity, rule) do
    initial_state = rule.workflow.states |> Enum.sort_by(&(&1.presentation_order_index)) |> hd
    instance = %Instance{workflow: rule.workflow, state: initial_state, values: []}

    rule.workflow.sections
    |> Enum.flat_map(&(&1.fields))
    |> Enum.filter(&only_initializable_references/1)
    |> Enum.reduce(instance, &initialize_field(activity, &1, &2))
  end

  defp only_initializable_references(field) do
    Field.reference_account(field) or Field.reference_timesheet(field)
  end

  defp initialize_field(activity, field, instance) do
    case { field.entity_reference_name, activity.target_schema } do
      { "Carbon.Account", "account" } -> add_value_to_instance(instance, field, activity.target_id)
      { "Carbon.Timesheet", "timesheet" } -> add_value_to_instance(instance, field, activity.target_id)
      _ -> instance
    end
  end

  defp add_value_to_instance(instance, field, id) do
    value = %Value{field: field, integer_value: id }
    %{ instance | values: [ value | instance.values ] }
  end
end
