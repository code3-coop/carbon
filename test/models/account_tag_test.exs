defmodule Carbon.AccountTagTest do
  use Carbon.ModelCase

  alias Carbon.AccountTag

  @valid_attrs %{description: "some content", color: "red"}
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
