defmodule Galaxy.Repo.Migrations.AddLockColumns do
  use Ecto.Migration

  def change do
    alter table(:accounts) do
      add :lock_version, :integer, default: 1, null: false
    end
    alter table(:addresses) do
      add :lock_version, :integer, default: 1, null: false
    end
    alter table(:contacts) do
      add :lock_version, :integer, default: 1, null: false
    end
    alter table(:deals) do
      add :lock_version, :integer, default: 1, null: false
    end
  end
end
