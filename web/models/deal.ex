defmodule Carbon.Deal do
  use Carbon.Web, :model

  schema "deals" do
    field :lock_version, :integer, default: 1

    field :description, :string
    field :expected_value, :integer
    field :probability, :integer
    field :closing_date, Ecto.Date
    field :closed_value, :integer
    field :active, :boolean, default: true

    belongs_to :account, Carbon.Account
    belongs_to :owner, Carbon.User
    many_to_many :tags, Carbon.DealTag, join_through: "j_deals_tags", on_replace: :delete

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

  def create_changeset(struct, params \\ %{}, tags) do
    struct
    |> cast(params, [:description, :probability, :expected_value])
    |> validate_required([:description, :expected_value, :probability])
    |> validate_inclusion(:probability, 0..100, message: "must be between 0 and 100")
    |> validate_number(:expected_value, greater_than: 0, message: "must be greater than 0")
    |> put_assoc(:tags, Enum.map(tags, &Ecto.Changeset.change/1))
    |> foreign_key_constraint(:owner_id)
  end

  def archive_changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:active])
  end

  def update_changeset(struct, params \\ %{}, tags) do
    struct
    |> cast(params, [:description, :expected_value, :probability, :closing_date, :closed_value])
    |> validate_required([:description, :probability])
    |> validate_inclusion(:probability, 0..100, message: "must be between 0 and 100")
    |> validate_number(:expected_value, greater_than: 0, message: "must be greater than 0")
    |> validate_number(:closed_value, greater_than: 0, message: "must be greater than 0")
    |> put_assoc(:tags, Enum.map(tags, &Ecto.Changeset.change/1))
    |> foreign_key_constraint(:owner_id)
  end

end
