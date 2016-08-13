defmodule Carbon.Repo.Migrations.AddOwnerToDeal do
  use Ecto.Migration

  def change do
    alter table :deals do
      add :owner_id, references(:users)
    end
  end
end
