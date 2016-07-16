defmodule Galaxy.Account do
  use Galaxy.Web, :model

  schema "accounts" do
    field :lock_version, :integer, default: 1
    field :name, :string
    field :active, :boolean, default: true

    has_one :billing_address, Galaxy.Address
    has_one :shipping_address, Galaxy.Address
    has_many :contacts, Galaxy.Contact
    has_many :events, Galaxy.Event
    has_many :deals, Galaxy.Deal
    belongs_to :status, Galaxy.AccountStatus
    many_to_many :tags, Galaxy.AccountTag, join_through: "j_accounts_tags"

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
