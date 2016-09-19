defmodule Carbon.Repo.Migrations.ChangeSectionPresentationOrderInderFromIndexToConstraint do
  use Ecto.Migration

  def change do
    drop unique_index :workflow_sections, [ :workflow_id, :presentation_order_index ]
    Ecto.Adapters.SQL.query! Carbon.Repo,  "ALTER TABLE public.workflow_sections ADD UNIQUE (presentation_order_index, workflow_id) DEFERRABLE;"
  end
end
