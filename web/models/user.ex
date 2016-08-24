defmodule Carbon.User do
  use Carbon.Web, :model

  schema "users" do
    field :lock_version, :integer, default: 1
    field :active, :boolean, default: true

    field :handle, :string
    field :full_name, :string
    field :title, :string
    field :email, :string
    field :image_url, :string
    field :send_email_reminders, :boolean, default: true

    many_to_many :roles, Carbon.Role, join_through: "j_users_roles"

    timestamps
  end

  def changeset(user, params \\ %{}) do
    user
    |> cast(params, [:full_name, :handle, :title, :email, :image_url])
    |> validate_required([:full_name, :handle])
    |> unique_constraint(:handle)
    |> unique_constraint(:email)
  end

  def login_changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:email])
  end
end
