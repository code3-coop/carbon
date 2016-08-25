defmodule Carbon.Repo.Migrations.AddUseDistinctAddressForShippingInAccount do
  use Ecto.Migration

  def change do
    alter table :accounts do
      add :use_distinct_address_for_shipping, :boolean, default: false
    end
  end
end
