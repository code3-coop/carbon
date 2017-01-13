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


  defp merge_date_time_to_datetime(%{"date" => date, "time" => time} = params) when date != "" and time != ""do
    datetime = Ecto.DateTime.cast!("#{date} #{time}:00")
    Map.put(params, "date", datetime)
  end
  defp merge_date_time_to_datetime(params) do
    Map.delete(params, "date")
  end

  def create_changeset(struct, params) do
    struct
    |> cast(merge_date_time_to_datetime(params), [:date])
    |> validate_required([:date])
    |> copyDateErrorToTimeError()
  end

  defp copyDateErrorToTimeError(changeset) do
    if Map.has_key?(changeset, :errors) and Keyword.has_key?(changeset.errors, :date) do
      Map.update! changeset, :errors, fn current_errors ->
        Keyword.put current_errors, :time, {"is invalid", [type: Ecto.Time]}
      end
    else
      changeset
    end
  end


  def archive_changeset(struct, params) do
    struct
    |> cast(params, [:active])
    |> validate_required([:active])
  end

end
