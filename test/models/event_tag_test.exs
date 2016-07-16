defmodule Galaxy.EventTagTest do
  use Galaxy.ModelCase

  alias Galaxy.EventTag

  @valid_attrs %{description: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = EventTag.changeset(%EventTag{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = EventTag.changeset(%EventTag{}, @invalid_attrs)
    refute changeset.valid?
  end
end
