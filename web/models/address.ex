defmodule Carbon.Address do
  use Carbon.Web, :model

  schema "addresses" do
    field :lock_version, :integer, default: 1

    field :street_address, :string
    field :extended_address, :string
    field :post_office_box, :string
    field :locality, :string
    field :region, :string
    field :postal_code, :string
    field :country_name, :string
    field :active, :boolean, default: true

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:street_address, :extended_address, :post_office_box, :locality, :region, :postal_code, :country_name, :active])
    |> validate_required([:street_address])
  end
end
