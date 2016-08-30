defmodule Carbon.Repo.Migrations.CreateProject.Phase do
  use Ecto.Migration

  def change do
    create table :project_phases do
      add :name, :string
      add :icon_name, :string
      add :color, :string
      add :presentation_order_index, :integer
      add :active, :boolean, default: true
      timestamps
    end

    alter table :projects do
      add :project_phase_id, references(:project_phases)
    end
  end
end
