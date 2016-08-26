defmodule Carbon.Workflow.FieldTest do
  use Carbon.ModelCase

  alias Carbon.Workflow.Field

  @valid_attrs %{description: "some content", entity_reference_name: "some content", name: "some content", presentation_order_index: 42, type: "text"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Field.changeset(%Field{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Field.changeset(%Field{}, @invalid_attrs)
    refute changeset.valid?
  end
end
