defmodule Carbon.Repo.Migrations.AddPrivateFieldToEvents do
  use Ecto.Migration

  def change do
    alter table :events do
      add :private, :boolean, default: false
    end
  end
end
