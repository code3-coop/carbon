defmodule Carbon.Repo.Migrations.AddImageUrlToUser do
  use Ecto.Migration

  def change do
    alter table :users do
      add :image_url, :string
    end
  end
end
