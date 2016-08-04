defmodule Carbon.AccountView do
  use Carbon.Web, :view
  import Ecto.Query, only: [from: 2]

  def account_status_select do
    query = from s in Carbon.AccountStatus,
      select: {s.key, s.id},
      order_by: s.id
    Carbon.Repo.all query
  end

  def account_tags_select do
    query = from at in Carbon.AccountTag,
      order_by: at.id
    Carbon.Repo.all query
  end

  def account_user_select do
    query = from u in Carbon.User,
      select: {u.full_name, u.id},
      order_by: u.id
    Carbon.Repo.all query
  end
end
