defmodule Carbon.Repo.Migrations.ConvertWorkflowInstaceStatePresentationOrderIndexFromIndexToconstraint do
  use Ecto.Migration


  def change do
    drop unique_index :workflow_states, [ :workflow_id, :presentation_order_index ]
    Ecto.Adapters.SQL.query! Carbon.Repo,  "ALTER TABLE public.workflow_states ADD UNIQUE (presentation_order_index, workflow_id) DEFERRABLE;"
  end
end
