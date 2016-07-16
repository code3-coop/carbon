defmodule Galaxy.Repo.Migrations.CreateTagJoinTables do
  use Ecto.Migration

  def change do
    create table(:accounts_tags, primary_key: false) do
      add :account_id, references(:accounts)
      add :account_tag_id, references(:account_tags)
    end
    create table(:events_tags, primary_key: false) do
      add :event_id, references(:events)
      add :event_tag_id, references(:event_tags)
    end
    create table(:deals_tags, primary_key: false) do
      add :deal_id, references(:deals)
      add :deal_tag_id, references(:deal_tags)
    end
    create table(:contacts_tags, primary_key: false) do
      add :contact_id, references(:contacts)
      add :contact_tag_id, references(:contact_tags)
    end
  end
end
