defmodule Carbon.Repo.Migrations.AddTriggerStatusField do
  use Ecto.Migration

  def change do
    alter table :activities do
      add :trigger_status, :string, default: "pending"
    end
    rename table(:activities), :target_schema, to: :entity_name
    rename table(:activities), :target_id, to: :entity_id
    rename table(:activities), :target_value, to: :changes
  end
end
