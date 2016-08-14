defmodule Carbon.Deal do
  use Carbon.Web, :model

  schema "deals" do
    field :lock_version, :integer, default: 1

    field :description, :string
    field :expected_value, :float
    field :probability, :integer
    field :closing_date, Ecto.Date
    field :closed_value, :float
    field :active, :boolean, default: true

    belongs_to :account, Carbon.Account
    belongs_to :owner, Carbon.User
    many_to_many :tags, Carbon.DealTag, join_through: "j_deals_tags"

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:expected_value, :probability, :closing_date, :closed_value])
    |> validate_required([:expected_value, :probability, :closing_date, :closed_value])
  end

  def create_changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:description, :probability, ])
    |> validate_required([:description, :probability])
  end
end
