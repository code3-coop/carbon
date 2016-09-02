defmodule Carbon.TriggerRule do
  use Carbon.Web, :model

  @allowed_entities %{
    "account" => ~w(status_id owner_id),
    "timesheet" => ~w(status_id),
  }

  def allowed_entities, do: @allowed_entities

  schema "trigger_rules" do
    field :name, :string
    field :description, :string
    field :action, :string
    field :entity, :string
    field :field, :string
    field :value, :integer
    field :active, :boolean, default: true

    belongs_to :user, Carbon.User
    belongs_to :workflow, Carbon.Workflow

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :description, :action, :entity, :field, :value, :active])
    |> validate_required([:name, :description, :action, :entity])
    |> validate_inclusion(:action, ~w(create remove update restore))
    |> validate_inclusion(:entity, Map.keys(@allowed_entities))
  end
end
