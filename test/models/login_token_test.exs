defmodule Carbon.LoginTokenTest do
  use Carbon.ModelCase

  alias Carbon.LoginToken

  @valid_attrs %{}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = LoginToken.changeset(%LoginToken{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = LoginToken.changeset(%LoginToken{}, @invalid_attrs)
    refute changeset.valid?
  end
end
