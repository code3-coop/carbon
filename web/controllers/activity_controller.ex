defmodule Carbon.ActivityController do
  use Carbon.Web, :controller

  alias Carbon.{ Account, Activity }
  
  def index(conn, %{"account_id" => account_id}) do
    query = from a in Activity,
      where: a.account_id == ^account_id,
      order_by: [ desc: a.inserted_at ],
      preload: [ :user, :account ]
    
    conn
    |> assign(:activities, Repo.all(query))
    |> assign(:account, Repo.get(Account, account_id)) 
    |> render("index.html")
  end
end
