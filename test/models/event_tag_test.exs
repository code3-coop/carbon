defmodule Carbon.EventTagTest do
  use Carbon.ModelCase

  alias Carbon.EventTag

  @valid_attrs %{description: "some content", color: "red"}
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
