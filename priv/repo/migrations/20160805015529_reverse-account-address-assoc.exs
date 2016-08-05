defmodule :"Elixir.Carbon.Repo.Migrations.Reverse-account-address-assoc" do
  use Ecto.Migration

  def change do
    alter table :accounts do
      add :billing_address_id, references(:addresses)
      add :shipping_address_id, references(:addresses)
    end
    alter table :addresses do
      remove :account_id
    end
  end
end
