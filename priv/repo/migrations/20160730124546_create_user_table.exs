defmodule Carbon.Repo.Migrations.CreateUserTable do
  use Ecto.Migration

  def change do
    create table :users do
      add :lock_version, :integer, default: 1, null: false

      add :handle, :string, null: false
      add :name, :string
      add :title, :string
      add :email_hash, :string, null: false
      
      add :active, :boolean, null: false, default: true

      timestamps
    end

    create unique_index(:users, [:handle])
    create unique_index(:users, [:email_hash])

    create table :roles do
      add :lock_version, :integer, default: 1, null: false

      add :key, :string, null: false
      add :description, :string

      add :active, :boolean, null: false, default: true

      timestamps
    end

    create unique_index(:roles, [:key])

    create table(:j_users_roles, primary_key: false) do
      add :user_id, references(:users)
      add :role_id, references(:roles)
    end

    create unique_index(:j_users_roles, [:user_id, :role_id])

    create table :login_tokens do
      add :user_id, references(:users)
      add :token, :string, null: false
      add :type, :string, null: false

      timestamps
    end

    create index(:login_tokens, [:token])
  end
end
