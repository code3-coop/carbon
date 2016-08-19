defmodule Carbon.Repo.Migrations.AddMetaDataOnTimesheetStatus do
  use Ecto.Migration

  def change do
    alter table :timesheet_statuses do
      add :editable_by_owner?, :boolean, default: false
      add :editable_by_manager?, :boolean, default: false
      add :presentation_order, :integer
    end

  end
end
