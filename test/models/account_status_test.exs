defmodule Carbon.AccountStatusTest do
  use Carbon.ModelCase

  alias Carbon.AccountStatus

  @valid_attrs %{key: "some content"}
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
