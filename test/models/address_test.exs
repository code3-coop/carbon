defmodule Carbon.AddressTest do
  use Carbon.ModelCase

  alias Carbon.Address

  @valid_attrs %{country_name: "some content", extended_address: "some content", locality: "some content", post_office_box: "some content", postal_code: "some content", region: "some content", street_address: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Address.changeset(%Address{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Address.changeset(%Address{}, @invalid_attrs)
    refute changeset.valid?
  end
end
