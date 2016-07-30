defmodule Carbon.LoginToken do
  use Carbon.Web, :model

  schema "login_tokens" do
    field :token, :string
    belongs_to :user, Carbon.User

    timestamps
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [])
    |> validate_required([])
  end
end
