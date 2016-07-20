defmodule Carbon.Account do
  use Carbon.Web, :model

  schema "accounts" do
    field :lock_version, :integer, default: 1
    field :name, :string
    field :active, :boolean, default: true

    has_one :billing_address, Carbon.Address
    has_one :shipping_address, Carbon.Address
    has_many :contacts, Carbon.Contact
    has_many :events, Carbon.Event
    has_many :deals, Carbon.Deal
    belongs_to :status, Carbon.AccountStatus
    many_to_many :tags, Carbon.AccountTag, join_through: "j_accounts_tags"

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name])
    |> validate_required([:name])
  end
end
