defmodule Carbon.Repo.Migrations.CreateDealStage do
  use Ecto.Migration

  def change do
    create table(:deal_stages) do
      add :description, :string
      add :color, :string
      add :active, :boolean, default: true, null: false

      timestamps()
    end

  end
end
