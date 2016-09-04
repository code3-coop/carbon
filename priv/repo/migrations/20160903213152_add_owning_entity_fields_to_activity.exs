defmodule Carbon.Repo.Migrations.AddOwningEntityFieldsToActivity do
  use Ecto.Migration

  def change do
    alter table :activities do
      remove :account_id
      add :owning_entity_name, :string
      add :owning_entity_id, :integer
    end
    index :activities, [:owning_entity_name, :owning_entity_id]
  end
end
