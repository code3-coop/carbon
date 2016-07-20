defmodule Carbon.Event do
  use Carbon.Web, :model

  schema "events" do
    field :description, :string
    field :date, Ecto.DateTime
    field :active, :boolean, default: true

    belongs_to :account, Carbon.Account
    has_many :reminders, Carbon.Reminder
    many_to_many :tags, Carbon.EventTag, join_through: "j_events_tags"

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:description, :date])
    |> validate_required([:description, :date])
  end
end
