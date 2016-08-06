defmodule Carbon.Repo.Migrations.ReplaceVarcharByText do
  use Ecto.Migration

  def change do
    alter table :events do
      modify :description, :text
    end
    alter table :deals do
      modify :description, :text
    end
    alter table :projects do
      modify :description, :text
    end
  end
end
