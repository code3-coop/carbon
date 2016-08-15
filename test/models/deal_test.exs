defmodule Carbon.DealTest do
  use Carbon.ModelCase

  alias Carbon.Deal

  @valid_attrs %{closed_value: "120", closing_date: %{day: 17, hour: 14, min: 0, month: 4, sec: 0, year: 2010}, expected_value: "120", probability: 42}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Deal.changeset(%Deal{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Deal.changeset(%Deal{}, @invalid_attrs)
    refute changeset.valid?
  end
end
