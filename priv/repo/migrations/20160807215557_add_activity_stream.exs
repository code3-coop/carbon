defmodule Carbon.Repo.Migrations.AddActivityStream do
  use Ecto.Migration

  def change do
    create table :activities do
      add :account_id, references(:accounts)
      add :user_id, references(:users)
      add :action, :string, null: false
      add :target_schema, :string, null: false
      add :target_id, :integer
      add :target_value, :text
      timestamps
    end
  end
end
