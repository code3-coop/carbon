defmodule Carbon.ActivityController do
  use Carbon.Web, :controller

  alias Carbon.{ Account, Activity }
  
  def index(conn, %{"account_id" => account_id}) do
    activities = Repo.all from a in Activity,
      where: a.account_id == ^account_id,
      order_by: [ desc: a.inserted_at ],
      preload: [ :user, :account ]
    
    conn
    |> assign(:activities, activities)
    |> assign(:account, hd(activities).account)
    |> render("index.html")
  end
end
