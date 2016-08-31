defmodule Carbon.Repo.Migrations.RemoveForeignKeyColumnsFromAttachments do
  use Ecto.Migration

  def change do
    alter table :attachments do
      remove :contact_id
      remove :deal_id
      remove :project_id
      remove :workflow_instance_id
      remove :event_id
      remove :timesheet_id
    end
  end
end
