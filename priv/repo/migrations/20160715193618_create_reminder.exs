defmodule Carbon.Repo.Migrations.CreateReminder do
  use Ecto.Migration

  def change do
    create table(:reminders) do
      add :date, :datetime
      add :event_id, references(:events)

      timestamps()
    end

  end
end
