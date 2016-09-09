defmodule Carbon.Repo.Migrations.AddActiveToStatesSectionsAndFields do
  use Ecto.Migration

  def change do
    alter table :workflow_states do
      add :active, :boolean, default: true
    end

    alter table :workflow_sections do
      add :active, :boolean, default: true
    end

    alter table :workflow_fields do
      add :active, :boolean, default: true
    end


  end
end
