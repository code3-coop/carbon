defmodule Carbon.Repo.Migrations.AddActiveToWorkflow do
  use Ecto.Migration

  def change do
    alter table :workflows do
      add :active, :boolean, default: true
    end
  end
end
