defmodule Carbon.DealController do
  use Carbon.Web, :controller

  import Carbon.ControllerUtils

  alias Carbon.Deal
  alias Carbon.Account

  def index(conn, _params) do 
    %{"account_id" => account_id} = conn.params
    deal_query = from d in Deal,
      where: d.account_id == ^account_id and d.active == true,
      left_join: t in assoc(d, :tags),
      left_join: o in assoc(d, :owner),
      preload: [tags: t, owner: o], 
      order_by: d.updated_at

    conn
    |> assign(:account, Repo.get(Account, account_id))
    |> assign(:deals, Repo.all(deal_query))
    |> render("index.html")
  end
  
  def new(conn, _params) do
    changeset = Deal.changeset(%Deal{})
    conn
    |> assign(:changeset, changeset)
    |> render("new.html")  
  end

  def create(conn, %{"deal" => deal_params}) do
    current_user = conn.assigns[:current_user]
    %{"account_id" => account_id} = conn.params
    tags = get_tags_from(Carbon.DealTag, deal_params)
    deal = %Deal{owner: current_user, account: Repo.get(Account, String.to_integer(account_id))}
    changeset = Deal.create_changeset(deal, deal_params, tags)
    
    case Repo.insert(changeset) do
      {:ok, deal} ->
        Carbon.Activity.new(account_id, current_user.id, :create, :deals, deal.id, changeset)        
        conn
        |> put_flash(:info, "Deal created successfully.")
        |> redirect(to: account_deal_path(conn, :index, account_id))
      {:error, changeset} -> 
        conn
        |> put_flash(:info, "Deal could not be created.")
        |> assign(:changeset, changeset)
        |> render("new.html")
    end
  end

  def delete(conn, _params) do 
    current_user = conn.assigns[:current_user]
    %{:params => %{"account_id" => account_id, "id" => deal_id}} = conn
    deal = Repo.get(Deal, deal_id)
    changeset = Deal.archive_changeset(deal, %{active: false})
    case Repo.update(changeset) do
      {:ok, deal} -> 
        Carbon.Activity.new(account_id, current_user.id, :delete, :deals, deal.id, changeset)        
        conn
        |> put_flash(:deleted_deal, deal)
        |> redirect(to: account_deal_path(conn, :index, account_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> put_flash(:info, "Failed to delete deal.")
        |> render(account_deal_path(conn, :index, account_id))
    end
  end
  def restore(conn, _params) do 
    current_user = conn.assigns[:current_user]
    %{:params => %{"account_id" => account_id, "id" => deal_id}} = conn
    deal = Repo.get(Deal, deal_id)
    changeset = Deal.archive_changeset(deal, %{active: true})
    case Repo.update(changeset) do
      {:ok, _deal} -> 
        Carbon.Activity.new(account_id, current_user.id, :restore, :deals, deal.id, changeset)        
        conn
        |> redirect(to: account_deal_path(conn, :index, account_id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> put_flash(:info, "Failed to restore deal.")
        |> render(account_deal_path(conn, :index, account_id))
    end
  end
end

