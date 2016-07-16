defmodule Galaxy.Repo.Migrations.CreateEvent do
  use Ecto.Migration

  def change do
    create table(:events) do
      add :description, :string
      add :date, :datetime

      timestamps()
    end

  end
end
