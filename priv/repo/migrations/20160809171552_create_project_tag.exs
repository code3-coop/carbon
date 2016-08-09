defmodule Carbon.Repo.Migrations.CreateProjectTag do
  use Ecto.Migration

  def change do
    create table :project_tags do
      add :description, :string
      add :color, :string
      add :active, :boolean, default: true, null: false
      timestamps
    end
    create table(:j_projects_tags, primary_key: false) do
      add :project_id, references(:projects)
      add :project_tag_id, references(:project_tags)
    end
  end
end
