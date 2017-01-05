defmodule Carbon.Repo.Migrations.ChangeFieldPresentationOrderFromIndexToConstraint do
  use Ecto.Migration

  def change do
    drop unique_index :workflow_fields, [ :section_id, :presentation_order_index ]
    Ecto.Adapters.SQL.query! Carbon.Repo,  "ALTER TABLE public.workflow_fields ADD UNIQUE (presentation_order_index, section_id) DEFERRABLE;"
  end
end
