defmodule Carbon.DealStageTest do
  use Carbon.ModelCase

  alias Carbon.DealStage

  @valid_attrs %{active: true, color: "some content", key: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = DealStage.changeset(%DealStage{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = DealStage.changeset(%DealStage{}, @invalid_attrs)
    refute changeset.valid?
  end
end
