defmodule Carbon.Repo.Migrations.AddImageUrlToContact do
  use Ecto.Migration

  def change do
    alter table :contacts do
      add :image_url, :string
    end
  end
end
