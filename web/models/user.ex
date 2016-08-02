defmodule Carbon.User do
  use Carbon.Web, :model

  schema "users" do
    field :lock_version, :integer, default: 1
    field :active, :boolean, default: true

    field :handle, :string
    field :name, :string
    field :title, :string
    field :email, :string, virtual: true
    field :email_hash, :string

    many_to_many :roles, Carbon.Role, join_through: "j_users_roles"

    timestamps
  end

  def login_changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:email])
  end
end
