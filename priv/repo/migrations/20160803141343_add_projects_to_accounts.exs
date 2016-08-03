defmodule Carbon.Repo.Migrations.AddProjectsToAccounts do
  use Ecto.Migration

  def change do
    create table :projects do
      add :lock_version, :integer, default: 1, null: false
      add :account_id, references(:accounts)
      add :key, :string
      add :description, :string
      add :active, :boolean, default: true, null: false
      timestamps
    end

    create unique_index :projects, [:id, :key]
  end
end
