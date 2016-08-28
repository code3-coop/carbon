defmodule Carbon.Repo.Migrations.AddUploaderToAttachments do
  use Ecto.Migration

  def change do
    alter table :attachments do
      add :user_id, references(:users)
      add :private, :boolean, default: false
    end
  end
end
