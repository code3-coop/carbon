defmodule Carbon.Reminder do
  use Carbon.Web, :model

  schema "reminders" do
    field :date, Ecto.DateTime
    field :active, :boolean, default: true

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
