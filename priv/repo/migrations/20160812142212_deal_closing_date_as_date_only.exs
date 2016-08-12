defmodule Carbon.Repo.Migrations.DealClosingDateAsDateOnly do
  use Ecto.Migration

  def change do
    alter table :deals do
      modify :closing_date, :date
    end
  end
end
