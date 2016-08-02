defmodule Carbon.Repo.Migrations.DropLoginTokens do
  use Ecto.Migration

  def change do
    drop table :login_tokens
  end
end
