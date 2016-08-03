defmodule Carbon.Repo.Migrations.DropNameColumns do
  use Ecto.Migration

  def change do
    rename table(:contacts), :name, to: :full_name
    rename table(:users), :name, to: :full_name
    alter table :contacts do
      remove :given_name
      remove :additional_name
      remove :family_name
    end
  end
end
