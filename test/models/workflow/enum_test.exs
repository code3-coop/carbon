defmodule Carbon.Workflow.EnumTest do
  use Carbon.ModelCase

  alias Carbon.Workflow.Enum

  @valid_attrs %{name: "some content", presentation_order_index: 42}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Enum.changeset(%Enum{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Enum.changeset(%Enum{}, @invalid_attrs)
    refute changeset.valid?
  end
end
