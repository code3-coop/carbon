defmodule Galaxy.AccountTagTest do
  use Galaxy.ModelCase

  alias Galaxy.AccountTag

  @valid_attrs %{description: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = AccountTag.changeset(%AccountTag{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = AccountTag.changeset(%AccountTag{}, @invalid_attrs)
    refute changeset.valid?
  end
end
