defmodule Carbon.Repo.Migrations.AlterTypeOfDealExpectedValueAndClosedValue do
  use Ecto.Migration

  def change do
    alter table :deals do
      modify :closed_value, :integer
      modify :expected_value, :integer
    end
  end
end
