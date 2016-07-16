defmodule Galaxy.Repo.Migrations.CreateContact do
  use Ecto.Migration

  def change do
    create table(:contacts) do
      add :name, :string
      add :given_name, :string
      add :additional_name, :string
      add :family_name, :string
      add :email, :string
      add :tel, :string
      add :gender, :integer

      timestamps()
    end

  end
end
