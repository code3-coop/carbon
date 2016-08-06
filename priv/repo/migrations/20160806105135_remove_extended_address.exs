defmodule Carbon.Repo.Migrations.RemoveExtendedAddress do
  use Ecto.Migration

  def change do
    alter table :addresses do
      remove :extended_address
      remove :post_office_box
    end
  end
end
