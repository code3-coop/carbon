defmodule Galaxy.ContactTag do
  use Galaxy.Web, :model

  schema "contact_tags" do
    field :description, :string
    field :color, :string
    field :active, :boolean, default: true
    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:description])
    |> validate_required([:description])
  end
end
