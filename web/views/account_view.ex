defmodule Carbon.AccountView do
  use Carbon.Web, :view
  import Ecto.Query, only: [from: 2]

  def account_status_select do
    query = from s in Carbon.AccountStatus,
      select: {s.key, s.id},
      order_by: s.id
    Carbon.Repo.all query
  end
end
