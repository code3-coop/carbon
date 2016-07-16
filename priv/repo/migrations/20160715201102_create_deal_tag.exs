defmodule Galaxy.Repo.Migrations.CreateDealTag do
  use Ecto.Migration

  def change do
    create table(:deal_tags) do
      add :description, :string
      add :color, :string

      timestamps()
    end

  end
end
