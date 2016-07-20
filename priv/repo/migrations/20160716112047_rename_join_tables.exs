defmodule Carbon.Repo.Migrations.RenameJoinTables do
  use Ecto.Migration

  def change do
    rename table(:accounts_tags), to: table(:j_accounts_tags)
    rename table(:contacts_tags), to: table(:j_contacts_tags)
    rename table(:deals_tags), to: table(:j_deals_tags)
    rename table(:events_tags), to: table(:j_events_tags)
  end
end
