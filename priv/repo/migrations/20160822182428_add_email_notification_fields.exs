defmodule Carbon.Repo.Migrations.AddEmailNotificationFields do
  use Ecto.Migration

  def change do
    alter table :users do
      add :send_email_reminders, :boolean, default: true
    end
    alter table :reminders do
      add :seen, :boolean, default: false
      add :sent_by_email, :boolean, default: false
    end
  end
end
