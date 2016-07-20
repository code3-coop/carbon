defmodule Carbon.Repo.Migrations.AddEventToAccountReference do
  use Ecto.Migration

  def change do
    alter table(:events) do
      add :account_id, references(:accounts)
    end
  end
end
