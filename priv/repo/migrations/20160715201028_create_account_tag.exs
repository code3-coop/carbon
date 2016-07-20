defmodule Carbon.Repo.Migrations.CreateAccountTag do
  use Ecto.Migration

  def change do
    create table(:account_tags) do
      add :description, :string
      add :color, :string

      timestamps()
    end

  end
end
