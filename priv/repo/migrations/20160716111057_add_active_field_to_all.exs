defmodule Carbon.Repo.Migrations.AddActiveFieldToAll do
  use Ecto.Migration

  def change do
    alter table(:accounts) do
      add :active, :boolean, default: true, null: false
    end
    alter table(:account_tags) do
      add :active, :boolean, default: true, null: false
    end
    alter table(:addresses) do
      add :active, :boolean, default: true, null: false
    end
    alter table(:contacts) do
      add :active, :boolean, default: true, null: false
    end
    alter table(:contact_tags) do
      add :active, :boolean, default: true, null: false
    end
    alter table(:deals) do
      add :active, :boolean, default: true, null: false
    end
    alter table(:deal_tags) do
      add :active, :boolean, default: true, null: false
    end
    alter table(:events) do
      add :active, :boolean, default: true, null: false
    end
    alter table(:event_tags) do
      add :active, :boolean, default: true, null: false
    end
    alter table(:reminders) do
      add :active, :boolean, default: true, null: false
    end
  end
end
