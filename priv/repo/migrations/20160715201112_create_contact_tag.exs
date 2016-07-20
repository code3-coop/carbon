defmodule Carbon.Repo.Migrations.CreateContactTag do
  use Ecto.Migration

  def change do
    create table(:contact_tags) do
      add :description, :string
      add :color, :string
      timestamps()
    end

  end
end
