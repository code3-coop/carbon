defmodule Carbon.Repo.Migrations.RenameProjectKeyToCode do
  use Ecto.Migration

  def change do
    rename table(:projects), :key, to: :code
  end
end
