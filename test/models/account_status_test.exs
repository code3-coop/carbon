defmodule Galaxy.AccountStatusTest do
  use Galaxy.ModelCase

  alias Galaxy.AccountStatus

  @valid_attrs %{description: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = AccountStatus.changeset(%AccountStatus{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = AccountStatus.changeset(%AccountStatus{}, @invalid_attrs)
    refute changeset.valid?
  end
end
