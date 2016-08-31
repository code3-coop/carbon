defmodule Carbon.Workflow.Instance do
  use Carbon.Web, :model

  schema "workflow_instances" do
    field :lock_version, :integer, default: 1

    belongs_to :workflow, Carbon.Workflow
    belongs_to :state, Carbon.Workflow.State

    has_many :values, Carbon.Workflow.Value
    has_many :attachments, Carbon.Attachment

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:lock_version, :state_id])
    |> validate_required([:lock_version,:state])
    |> foreign_key_constraint(:state_id)
    |> optimistic_lock(:lock_version)
  end
end
