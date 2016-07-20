defmodule Carbon.Repo.Migrations.CreateAccountStatus do
  use Ecto.Migration

  def change do
    create table(:account_statuses) do
      add :description, :string
      add :active, :boolean, default: true
      timestamps()
    end
    alter table(:accounts) do
      add :status_id, references(:account_statuses)
    end

  end
end
