defmodule Galaxy.Repo.Migrations.AddContactToAccountReference do
  use Ecto.Migration

  def change do
    alter table(:contacts) do
      add :account_id, references(:accounts)
    end
  end
end
