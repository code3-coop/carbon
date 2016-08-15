defmodule Carbon.DealController do
  use Carbon.Web, :controller

  import Carbon.ControllerUtils

  alias Carbon.Deal
  alias Carbon.Account

  def index(conn, %{ "account_id" => account_id }) do 
    query = from d in Deal,
      where: d.account_id == ^account_id and d.active == true,
      left_join: t in assoc(d, :tags),
      left_join: o in assoc(d, :owner),
      preload: [tags: t, owner: o], 
      order_by: d.updated_at
    conn
    |> assign(:account, Repo.get(Account, account_id))
    |> assign(:deals, Repo.all(query))
    |> render("index.html")
  end
  
  def new(conn, _params) do
    conn
    |> assign(:changeset, Deal.changeset(%Deal{}))
    |> render("new.html")  
  end

  def create(conn, %{"account_id" => account_id, "deal" => deal_params}) do
    current_user = conn.assigns[:current_user]
    tags = get_tags_from(Carbon.DealTag, deal_params)
    deal = %Deal{ owner: current_user, account: Repo.get(Account, account_id) }
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

  def delete(conn, %{ "account_id" => account_id, "id" => deal_id }) do 
    current_user = conn.assigns[:current_user]
    deal = Repo.get(Deal, deal_id)
    changeset = Deal.archive_changeset(deal, %{active: false})

    case Repo.update(changeset) do
      {:ok, deal} -> 
        Carbon.Activity.new(account_id, current_user.id, :remove, :deals, deal.id, changeset)        
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

  def restore(conn, %{ "account_id" => account_id, "id" => deal_id }) do 
    current_user = conn.assigns[:current_user]
    deal = Repo.get(Deal, deal_id)
    changeset = Deal.archive_changeset(deal, %{active: true})

    case Repo.update(changeset) do
      {:ok, deal} -> 
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

  def edit(conn, %{"id" => deal_id}) do
    deal_query = from d in Deal,
      where: d.id == ^deal_id,
      left_join: t in assoc(d, :tags),
      preload: [ tags: t ]
    deal = Repo.one(deal_query)
    changeset = Deal.changeset(deal)

    conn
    |> assign(:deal, deal)
    |> assign(:changeset, changeset)
    |> render("edit.html")
  end

  def update(conn, %{"account_id" => account_id, "id" => id, "deal" => deal_params}) do
    current_user = conn.assigns[:current_user]
    tags = get_tags_from(Carbon.DealTag, deal_params)
    deal = Repo.get!(Deal, id) |> Repo.preload([:owner, :tags])
    changeset = Deal.update_changeset(deal, deal_params, tags)

    case Repo.update(changeset) do
      {:ok, _deal} ->
        Carbon.Activity.new(account_id, current_user.id, :update, :deals, deal.id, changeset)
        conn
        |> put_flash(:info, "Deal updated successfully.")
        |> redirect(to: account_deal_path(conn, :index, account_id))
      {:error, changeset} ->
        conn
        |> assign(:deal, deal)
        |> assign(:changeset, changeset)
        |> render("edit.html")
    end
  end
  
end

