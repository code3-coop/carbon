defmodule Carbon.Contact do
  use Carbon.Web, :model

  schema "contacts" do
    field :lock_version, :integer, default: 1

    field :name, :string
    field :given_name, :string
    field :additional_name, :string
    field :family_name, :string
    field :email, :string
    field :tel, :string
    field :gender, :integer
    field :active, :boolean, default: true

    belongs_to :account, Carbon.Account
    many_to_many :tags, Carbon.ContactTag, join_through: "j_contacts_tags"

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :given_name, :additional_name, :family_name, :email, :tel, :gender])
    |> validate_required([:name, :given_name, :additional_name, :family_name, :email, :tel, :gender])
  end
end
