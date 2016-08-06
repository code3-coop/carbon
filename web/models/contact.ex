defmodule Carbon.Contact do
  use Carbon.Web, :model

  schema "contacts" do
    field :lock_version, :integer, default: 1

    field :full_name, :string
    field :title, :string
    field :email, :string
    field :tel, :string
    field :image_url, :string
    field :active, :boolean, default: true

    belongs_to :account, Carbon.Account
    many_to_many :tags, Carbon.ContactTag, join_through: "j_contacts_tags"

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(contact, params \\ %{}) do
    contact
    |> cast(params, [:full_name, :title, :email, :tel, :image_url, :active])
    |> validate_required([:full_name])
  end
end
