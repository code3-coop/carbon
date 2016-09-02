defmodule Carbon.TriggerTest do
  use Carbon.ModelCase

  alias Carbon.Trigger

  @valid_attrs %{action: "some content", active: true, description: "some content", entity_name: "some content", field_name: "some content", field_value: 42, name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Trigger.changeset(%Trigger{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Trigger.changeset(%Trigger{}, @invalid_attrs)
    refute changeset.valid?
  end
end
