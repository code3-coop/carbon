defmodule Galaxy.Repo.Migrations.CreateAccount do
  use Ecto.Migration

  def change do
    create table(:accounts) do
      add :name, :string

      timestamps()
    end

  end
end
