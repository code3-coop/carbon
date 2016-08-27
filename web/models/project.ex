defmodule Carbon.Project do
  use Carbon.Web, :model

  schema "projects" do
    field :lock_version, :integer, default: 1

    field :code, :string
    field :description, :string
    field :active, :boolean, default: true

    belongs_to :account, Carbon.Account
    has_many :attachments, Carbon.Attachment
    many_to_many :tags, Carbon.ProjectTag, join_through: "j_projects_tags"

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:code, :description, :active])
    |> validate_required([:code])
    |> foreign_key_constraint(:account_id)
  end
end
