defmodule Carbon.WorkflowTest do
  use Carbon.ModelCase

  alias Carbon.Workflow

  @valid_attrs %{description: "some content", name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Workflow.changeset(%Workflow{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Workflow.changeset(%Workflow{}, @invalid_attrs)
    refute changeset.valid?
  end
end
