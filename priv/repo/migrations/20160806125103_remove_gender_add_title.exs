defmodule Carbon.Repo.Migrations.RemoveGenderAddTitle do
  use Ecto.Migration

  def change do
    alter table :contacts do
      remove :gender
      add :title, :string
    end
  end
end
