defmodule Carbon.Repo.Migrations.AddDealToAccountReference do
  use Ecto.Migration

  def change do
    alter table(:deals) do
      add :account_id, references(:accounts)
    end
  end
end
