defmodule Carbon.ContactTest do
  use Carbon.ModelCase

  alias Carbon.Contact

  @valid_attrs %{additional_name: "some content", email: "some content", family_name: "some content", gender: 42, given_name: "some content", name: "some content", tel: "some content"}
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
