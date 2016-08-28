defmodule Carbon.Attachment do
  use Carbon.Web, :model

  schema "attachments" do
    field :name, :string
    field :description, :string
    field :private, :boolean, default: false
    field :mimetype, :string
    field :base64_content, :string

    belongs_to :user, Carbon.User
    belongs_to :account, Carbon.Account
    belongs_to :event, Carbon.Event
    belongs_to :contact, Carbon.Contact
    belongs_to :deal, Carbon.Deal
    belongs_to :project, Carbon.Project
    belongs_to :timesheet, Carbon.Timesheet
    belongs_to :workflow_instance, Carbon.Workflow.Instance

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :description, :mimetype, :base64_content])
    |> validate_required([:name, :description, :mimetype, :base64_content])
  end
end
