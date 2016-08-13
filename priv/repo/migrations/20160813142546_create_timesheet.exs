defmodule Carbon.Repo.Migrations.CreateTimesheet do
  use Ecto.Migration

  def change do
    create table(:timesheet_statuses) do
      add :key, :string, null: false
      add :active, :boolean, default: true, null: false
      timestamps
    end
    create table(:timesheets) do
      add :lock_version, :integer, default: 1, null: false
      add :active, :boolean, default: true, null: false
      add :start_date, :date, null: false
      add :notes, :text
      add :status_id, references(:timesheet_statuses)
      add :user_id, references(:users)
      timestamps
    end
    create table(:timesheet_entries) do
      add :lock_version, :integer, default: 1, null: false
      add :active, :boolean, default: true, null: false
      add :duration_in_minutes, :integer, default: 0, null: false
      add :date, :date, null: false
      add :notes, :text
      add :billable, :boolean, default: true
      add :timesheet_id, references(:timesheets)
      add :account_id, references(:accounts)
      add :project_id, references(:projects)
      timestamps
    end
    create table(:timesheet_entry_tags) do
      add :description, :string
      add :color, :string
      add :active, :boolean, default: true, null: false
      timestamps
    end
    create table(:j_timesheet_entries_tags, primary_key: false) do
      add :timesheet_entry_id, references(:timesheet_entries)
      add :timesheet_entry_tag_id, references(:timesheet_entry_tags)
    end
  end
end
