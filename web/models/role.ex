defmodule Carbon.Role do
  use Carbon.Web, :model

  schema "roles" do
    field :lock_version, :integer, default: 1
    field :active, :boolean, default: true

    field :key, :string
    field :description, :string

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
