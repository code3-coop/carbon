defmodule Carbon.Repo.Migrations.CreateTrigger do
  use Ecto.Migration

  def change do
    create table(:trigger_rules) do
      add :name, :string
      add :description, :string
      add :action, :string
      add :entity, :string
      add :field, :string
      add :value, :integer
      add :active, :boolean, default: true, null: false
      add :user_id, references(:users, on_delete: :nothing)
      add :workflow_id, references(:workflows, on_delete: :nothing)

      timestamps
    end
    create index(:trigger_rules, [:action, :entity, :field, :value])

  end
end
