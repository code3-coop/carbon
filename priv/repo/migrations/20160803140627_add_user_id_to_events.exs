defmodule Carbon.Repo.Migrations.AddUserIdToEvents do
  use Ecto.Migration

  def change do
    alter table :events do
      add :user_id, references(:users)
    end
  end
end
