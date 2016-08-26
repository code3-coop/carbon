defmodule Carbon.Repo.Migrations.CreateWorkflowSchema do
  use Ecto.Migration

  def change do
    create table :workflows do
      add :name, :string
      add :description, :text
      timestamps
    end
    create table :workflow_sections do
      add :name, :string
      add :description, :text
      add :presentation_order_index, :integer, default: 0, null: false
      add :workflow_id, references(:workflows)
    end
    create table :workflow_fields do
      add :name, :string
      add :description, :text
      add :type, :string
      add :entity_reference_name, :string
      add :presentation_order_index, :integer, default: 0, null: false
      add :section_id, references(:workflow_sections)
    end
    create table :workflow_field_enums do
      add :name, :string
      add :presentation_order_index, :integer, default: 0, null: false
      add :field_id, references(:workflow_fields)
    end
    create table :workflow_states do
      add :name, :string
      add :description, :text
      add :icon_name, :string
      add :color, :string
      add :presentation_order_index, :integer, default: 0, null: false
      add :workflow_id, references(:workflows)
    end
    create table :workflow_instances do
      add :lock_version, :integer, default: 1, null: false
      add :workflow_id, references(:workflows)
      add :state_id, references(:workflow_states)
      add :creator_id, references(:users)
      timestamps
    end
    create table :workflow_field_values do
      add :lock_version, :integer, default: 1, null: false
      add :field_id, references(:workflow_fields)
      add :instance_id, references(:workflow_instances)
      add :string_value, :text, null: true
      add :integer_value, :integer, null: true
      add :float_value, :float, null: true
      add :date_value, :date, null: true
      add :boolean_value, :boolean, null: true
      timestamps
    end

    create unique_index :workflow_sections, [ :workflow_id, :presentation_order_index ]
    create unique_index :workflow_fields, [ :section_id, :presentation_order_index ]
    create unique_index :workflow_field_enums, [ :field_id, :presentation_order_index ]
    create unique_index :workflow_states, [ :workflow_id, :presentation_order_index ]
    create unique_index :workflow_field_values, [ :field_id, :instance_id ]
  end
end
