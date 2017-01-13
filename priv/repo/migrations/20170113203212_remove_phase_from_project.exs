defmodule Carbon.Repo.Migrations.RemovePhaseFromProject do
  use Ecto.Migration

  def change do
    drop table :project_phases
  end
end
