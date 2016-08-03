defmodule Carbon.Repo.Migrations.AddOwnerIdToAccount do
  use Ecto.Migration

  def change do
    alter table :accounts do
      add :owner_id, references(:users)
    end
  end
end
