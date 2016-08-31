defmodule Carbon.Attachment do
  use Carbon.Web, :model

  schema "attachments" do
    field :name, :string
    field :description, :string
    field :private, :boolean, default: false
    field :mimetype, :string
    field :base64_content, :string

    belongs_to :user, Carbon.User
    belongs_to :account, Carbon.Account

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :description, :private, :mimetype, :base64_content])
    |> validate_required([:name, :mimetype, :base64_content])
  end
  def update_changeset(attachment, params) do
    attachment
    |> cast(params, [:description, :private])
  end
end
