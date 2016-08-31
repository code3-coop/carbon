defmodule Carbon.Project.PhaseTest do
  use Carbon.ModelCase

  alias Carbon.Project.Phase

  @valid_attrs %{"color,": "some content", "icon_name,": "some content", "name,": "some content", presentation_order_index: 42}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Phase.changeset(%Phase{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Phase.changeset(%Phase{}, @invalid_attrs)
    refute changeset.valid?
  end
end
