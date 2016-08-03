defmodule Carbon.ContactTest do
  use Carbon.ModelCase

  alias Carbon.Contact

  @valid_attrs %{email: "some content", gender: 42, full_name: "some content", tel: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Contact.changeset(%Contact{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Contact.changeset(%Contact{}, @invalid_attrs)
    refute changeset.valid?
  end
end
