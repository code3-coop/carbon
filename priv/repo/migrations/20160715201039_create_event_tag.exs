defmodule Carbon.Repo.Migrations.CreateEventTag do
  use Ecto.Migration

  def change do
    create table(:event_tags) do
      add :description, :string
      add :color, :string

      timestamps()
    end

  end
end
