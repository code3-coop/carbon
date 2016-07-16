defmodule Galaxy.ContactTagTest do
  use Galaxy.ModelCase

  alias Galaxy.ContactTag

  @valid_attrs %{description: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = ContactTag.changeset(%ContactTag{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = ContactTag.changeset(%ContactTag{}, @invalid_attrs)
    refute changeset.valid?
  end
end
