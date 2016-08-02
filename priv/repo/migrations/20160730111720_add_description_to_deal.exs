defmodule Carbon.Repo.Migrations.AddDescriptionToDeal do
  use Ecto.Migration

  def change do
    alter table :deals do
      add :description, :string
    end
  end
end
