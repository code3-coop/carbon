defmodule Carbon.Repo.Migrations.AddAttachmentTables do
  use Ecto.Migration

  def change do
    create table :attachments do
      add :name, :text
      add :description, :text
      add :mimetype, :text
      add :base64_content, :text
      add :account_id, references(:accounts)
      add :contact_id, references(:contacts)
      add :deal_id, references(:deals)
      add :event_id, references(:events)
      add :project_id, references(:projects)
      add :timesheet_id, references(:timesheets)
      add :workflow_instance_id, references(:workflow_instances)
      timestamps
    end
  end
end
