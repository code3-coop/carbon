defmodule Galaxy.Repo.Migrations.AddAddressToAccountReference do
  use Ecto.Migration

  def change do
    alter table(:addresses) do
      add :account_id, references(:accounts)
    end
  end
end
