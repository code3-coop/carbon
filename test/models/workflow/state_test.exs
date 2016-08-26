defmodule Carbon.Workflow.StateTest do
  use Carbon.ModelCase

  alias Carbon.Workflow.State

  @valid_attrs %{color: "some content", icon_name: "some content", name: "some content", presentation_order_index: 42}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = State.changeset(%State{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = State.changeset(%State{}, @invalid_attrs)
    refute changeset.valid?
  end
end
