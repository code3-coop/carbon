defmodule Carbon.AttachmentTest do
  use Carbon.ModelCase

  alias Carbon.Attachment

  @valid_attrs %{base64_content: "some content", description: "some content", mimetype: "some content", name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Attachment.changeset(%Attachment{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Attachment.changeset(%Attachment{}, @invalid_attrs)
    refute changeset.valid?
  end
end
