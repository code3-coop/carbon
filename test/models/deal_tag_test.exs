defmodule Galaxy.DealTagTest do
  use Galaxy.ModelCase

  alias Galaxy.DealTag

  @valid_attrs %{description: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = DealTag.changeset(%DealTag{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = DealTag.changeset(%DealTag{}, @invalid_attrs)
    refute changeset.valid?
  end
end
