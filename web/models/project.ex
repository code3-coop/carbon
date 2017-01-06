defmodule Carbon.Project do
  use Carbon.Web, :model

  schema "projects" do
    field :lock_version, :integer, default: 1

    field :code, :string
    field :description, :string
    field :estimate_unit, :string, default: "CAD"
    field :estimate_min, :float
    field :estimate_max, :float
    field :start_date, Ecto.Date
    field :end_date, Ecto.Date

    field :active, :boolean, default: true

    belongs_to :account, Carbon.Account
    has_many :phases, Carbon.Project.Phase
    many_to_many :tags, Carbon.ProjectTag, join_through: "j_projects_tags", on_replace: :delete

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:code, :description, :active, :estimate_unit, :estimate_min, :estimate_max, :start_date, :end_date])
    |> validate_required([:code])
    |> validate_inclusion(:estimate_unit, ~w(hours CAD))
    |> optimistic_lock(:lock_version)
  end

  def update_changeset(struct, params \\ %{}, tags) do
    changeset(struct, params)
    |> put_assoc(:tags, Enum.map(tags, &Ecto.Changeset.change/1))
  end

  def archive_changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:active])
  end
end
