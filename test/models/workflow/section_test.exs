defmodule Carbon.Workflow.SectionTest do
  use Carbon.ModelCase

  alias Carbon.Workflow.Section

  @valid_attrs %{description: "some content", name: "some content", presentation_order_index: 42}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Section.changeset(%Section{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Section.changeset(%Section{}, @invalid_attrs)
    refute changeset.valid?
  end
end
