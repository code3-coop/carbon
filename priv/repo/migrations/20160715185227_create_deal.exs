defmodule Carbon.Repo.Migrations.CreateDeal do
  use Ecto.Migration

  def change do
    create table(:deals) do
      add :expected_value, :float
      add :probability, :integer
      add :closing_date, :datetime
      add :closed_value, :float

      timestamps()
    end

  end
end
