defmodule Carbon.ActivityController do
  use Carbon.Web, :controller

  alias Carbon.{ Account, Activity }
  
  def index(conn, %{"account_id" => account_id}) do
    activities = Repo.all from a in Activity,
      where: a.owning_entity_name == "account" and a.owning_entity_id == ^account_id,
      order_by: [ desc: a.inserted_at ],
      preload: [ :user ]

    account = Repo.get(Account, account_id)
    
    conn
    |> assign(:activities, activities)
    |> assign(:account, account)
    |> render("index.html")
  end
end
