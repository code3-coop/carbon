defmodule Carbon.Workflow do
  use Carbon.Web, :model

  schema "workflows" do
    field :name, :string
    field :description, :string

    has_many :sections, Carbon.Workflow.Section
    has_many :states, Carbon.Workflow.State
    has_many :instances, Carbon.Workflow.Instance

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :description])
    |> validate_required([:name, :description])
  end
end
