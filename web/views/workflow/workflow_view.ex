defmodule Carbon.Workflow.WorkflowView do
  use Carbon.Web, :view
  # import Ecto.Query, only: [from: 2]

  @now Ecto.DateTime.from_erl(:calendar.local_time)

  @fake_workflows  [
    %{name: "Cloud shoveling", description: "The nice proces for looking really busy without actually solving anything for anyone", sections: 0..10, instances: 0..14, states: 0..8, updated_at: @now},
    %{name: "Search of lost", description: "The fine art of losing thing and then spending minutes, hours, even days looking for your stuff.", sections: [], instances: 0..900, states: 0..4, updated_at: @now},
    %{name: "Wine tasting", description: "One of the only thing that matters in life", sections: 0..900, instances: [], states: 0..90, updated_at: @now},
  ]

  def random_fake_workflow do
    Enum.random(@fake_workflows)
  end

  def icon_for_field_type("date"), do: "calendar"
  def icon_for_field_type("long_text"), do: "font"
  def icon_for_field_type("text"), do: "font"
  def icon_for_field_type("reference"), do: "reply"
  def icon_for_field_type("integer"), do: "calculator"
  def icon_for_field_type("float"), do: "calculator"
  def icon_for_field_type("currency"), do: "dollar"
  def icon_for_field_type("enum"), do: "list"
  def icon_for_field_type(type), do: IO.inspect( type)

end
