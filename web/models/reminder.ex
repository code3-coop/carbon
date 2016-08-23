defmodule Carbon.Reminder do
  use Carbon.Web, :model

  schema "reminders" do
    field :active, :boolean, default: true

    field :date, Ecto.DateTime
    field :seen, :boolean, default: false
    field :sent_by_email, :boolean, default: false

    belongs_to :event, Carbon.Event
    belongs_to :user, Carbon.User

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:date])
    |> validate_required([:date])
  end
  
  def create_changeset(struct, params) do
    struct
    |> cast(params, [:date])
    |> validate_required([:date])
  end

  def archive_changeset(struct, params) do
    struct
    |> cast(params, [:active])
    |> validate_required([:active])
  end
  
end
