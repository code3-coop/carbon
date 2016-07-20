defmodule Carbon.Repo.Migrations.AddColorToAccountStatuses do
  use Ecto.Migration

  def change do
    alter table(:account_statuses) do
      add :color, :string
    end
  end
end
