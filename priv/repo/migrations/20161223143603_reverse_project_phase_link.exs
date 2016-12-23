defmodule Carbon.Repo.Migrations.ReverseProjectPhaseLink do
  use Ecto.Migration

  def change do
    alter table(:project_phases) do
      add :project_id, references(:projects)
    end
    alter table(:projects) do
      remove :phase_id
    end
  end
end
