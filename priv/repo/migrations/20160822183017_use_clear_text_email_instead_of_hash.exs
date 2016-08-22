defmodule Carbon.Repo.Migrations.UseClearTextEmailInsteadOfHash do
  use Ecto.Migration

  def change do
    drop index(:users, [:email_hash])

    alter table :users do
      remove :email_hash
      add :email, :text, null: false
    end

    create unique_index(:users, [:email])
  end
end
