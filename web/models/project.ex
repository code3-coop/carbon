defmodule Carbon.Project do
  use Carbon.Web, :model

  schema "projects" do
    field :lock_version, :integer, default: 1

    field :code, :string
    field :description, :float
    field :active, :boolean, default: true

    belongs_to :account, Carbon.Account

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [])
    |> validate_required([])
  end
end
