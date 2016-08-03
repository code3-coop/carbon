defmodule Carbon.UserTest do
  use Carbon.ModelCase

  alias Carbon.User

  @valid_attrs %{"name" => "Joe", "handle" => "joe"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = User.changeset(%User{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = User.changeset(%User{}, @invalid_attrs)
    refute changeset.valid?
  end
end
