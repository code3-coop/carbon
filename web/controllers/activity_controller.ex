defmodule Carbon.ActivityController do
  use Carbon.Web, :controller

  alias Carbon.Activity
  
  def index(conn, %{"account_id" => account_id}) do
    query = from a in Activity,
      where: a.account_id == ^account_id,
      left_join: u in assoc(a, :user),
      left_join: ac in assoc(a, :account),
      preload: [user: u, account: ac],
      order_by: [desc: a.inserted_at]
    
    account_query = from ac in Carbon.Account,
      where: ac.id == ^account_id,
      select: %{name: ac.name}
      
    conn
    |> assign(:activities, Repo.all(query))
    |> assign(:account, Repo.one(account_query)) 
    |> render("index.html")
  end
end
