defmodule Carbon.Workflow.ValueTest do
  use Carbon.ModelCase

  alias Carbon.Workflow.Value

  @valid_attrs %{boolean_value: true, date_value: %{day: 17, month: 4, year: 2010}, float_value: "120.5", integer_value: 42, lock_version: 42, string_value: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Value.changeset(%Value{}, @valid_attrs)
    assert changeset.valid?
  end
end
