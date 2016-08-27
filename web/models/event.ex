defmodule Carbon.Event do
  use Carbon.Web, :model

  schema "events" do
    field :description, :string
    field :date, Ecto.Date
    field :private, :boolean, default: false
    field :active, :boolean, default: true

    belongs_to :user, Carbon.User
    belongs_to :account, Carbon.Account
    has_many :reminders, Carbon.Reminder
    has_many :attachments, Carbon.Attachment
    many_to_many :tags, Carbon.EventTag, join_through: "j_events_tags", on_replace: :delete

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:description, :date, :private])
    |> validate_required([:description, :date])
  end

  def create_changeset(struct, params \\ %{}, tags) do
    struct
    |> cast(params, [:description, :date, :private])
    |> validate_required([:description, :date])
    |> put_assoc(:tags, Enum.map(tags, &Ecto.Changeset.change/1))
    |> foreign_key_constraint(:user_id)
    |> foreign_key_constraint(:status_id)
  end

  def archive_changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:active])
    |> validate_required([:active])
  end
  
  def update_changeset(struct, params, tags) do
    struct
    |> cast(params, [:description, :date, :private, :user_id])
    |> validate_required([:description, :date, :user_id])
    |> put_assoc(:tags, Enum.map(tags, &Ecto.Changeset.change/1))
    |> foreign_key_constraint(:user_id)
  end
end
