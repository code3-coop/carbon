defmodule Carbon.Repo.Migrations.AddEstimatesToProjects do
  use Ecto.Migration

  def change do
    alter table :projects do
      add :estimate_unit, :string
      add :estimate_min, :float
      add :estimate_max, :float
    end
  end
end
