defmodule Galaxy.Deal do
  use Galaxy.Web, :model

  schema "deals" do
    field :lock_version, :integer, default: 1

    field :expected_value, :float
    field :probability, :integer
    field :closing_date, Ecto.DateTime
    field :closed_value, :float
    field :active, :boolean, default: true

    belongs_to :account, Galaxy.Account
    many_to_many :tags, Galaxy.DealTag, join_through: "j_deals_tags"

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
end
