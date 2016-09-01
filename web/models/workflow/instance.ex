defmodule Carbon.Workflow.Instance do
  use Carbon.Web, :model

  schema "workflow_instances" do
    field :lock_version, :integer, default: 1
    field :active, :boolean, default: true

    belongs_to :workflow, Carbon.Workflow
    belongs_to :state, Carbon.Workflow.State

    has_many :values, Carbon.Workflow.Value

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:lock_version, :state_id, :workflow_id])
    |> validate_required([:lock_version])
    |> foreign_key_constraint(:state_id)
    |> foreign_key_constraint(:workflow_id)
    |> optimistic_lock(:lock_version)
  end

  def create_changeset(struct, params \\ %{}, values) do
    struct
    |> cast(params, [:lock_version, :state_id, :workflow_id])
    |> validate_required([:lock_version])
    |> foreign_key_constraint(:state_id)
    |> foreign_key_constraint(:workflow_id)
    |> put_assoc(:values, Enum.map(values, &Ecto.Changeset.change/1))
    |> optimistic_lock(:lock_version)
  end

end
