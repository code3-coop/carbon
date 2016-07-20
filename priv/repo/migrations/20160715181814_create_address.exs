defmodule Carbon.Repo.Migrations.CreateAddress do
  use Ecto.Migration

  def change do
    create table(:addresses) do
      add :street_address, :string
      add :extended_address, :string
      add :post_office_box, :string
      add :locality, :string
      add :region, :string
      add :postal_code, :string
      add :country_name, :string

      timestamps()
    end

  end
end
