defmodule Carbon.Workflow.InstanceTest do
  use Carbon.ModelCase

  alias Carbon.Workflow.Instance

  @valid_attrs %{lock_version: 42}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Instance.changeset(%Instance{}, @valid_attrs)
    assert changeset.valid?
  end
end
