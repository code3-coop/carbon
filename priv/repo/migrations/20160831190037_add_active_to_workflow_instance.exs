defmodule Carbon.Repo.Migrations.AddActiveToWorkflowInstance do
  use Ecto.Migration

  def change do
    alter table(:workflow_instances) do
      add :active, :boolean, default: true, null: false
    end

  end
end
