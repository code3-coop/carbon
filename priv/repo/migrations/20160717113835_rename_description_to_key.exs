defmodule Carbon.Repo.Migrations.RenameDescriptionToKey do
  use Ecto.Migration

  def change do
    rename table(:account_statuses), :description, to: :key
    rename table(:deal_stages), :description, to: :key
  end
end
