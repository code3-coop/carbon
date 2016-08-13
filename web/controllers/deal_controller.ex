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
      preload: [ tags: t], 
      order_by: d.updated_at

    conn
    |> assign(:account, Repo.get(Account, account_id))
    |> assign(:deals, Repo.all(deal_query))
    |> render("index.html")
  end
  
  def new(conn, _params) do
    #changeset = Deal.changeset(%Deal{})
    #conn
    #|> assign(:changeset, changeset)
    #|> assign(:account_id, account_id)
    #|> render("new.html")  
  end

  def create(conn, %{"account_id" => account_id, "event_id" => event_id, "reminder" => reminder_params}) do
    #current_user = conn.assigns[:current_user]
    #reminder = %Reminder{user: current_user, event: Repo.get(Event, String.to_integer(event_id))}
    #date = Ecto.DateTime.cast!("#{reminder_params["date"]} #{reminder_params["time"]}:00")
    #changeset = Reminder.create_changeset(reminder, %{date:  date})
    #case Repo.insert(changeset) do
      #{:ok, _reminder} ->
        #conn
        #|> put_flash(:info, "Reminder created successfully.")
        #|> redirect(to: account_event_path(conn, :index, account_id))
      #{:error, changeset} -> 
        #conn
        #|> put_flash(:info, "Reminder could not be created.")
        #|> assign(:changeset, changeset)
        #|> assign(:account_id, account_id)
        #|> assign(:event_id, event_id)
        #|> render("new.html")
    #end
  end

  def delete(conn, _params) do 
    #%{:params => %{"account_id" => account_id, "id" => reminder_id}} = conn
    #reminder = Repo.get(Reminder, reminder_id)
    #changeset = Reminder.archive_changeset(reminder, %{active: false})
    #case Repo.update(changeset) do
      #{:ok, reminder} -> 
        #conn
        #|> put_flash(:deleted_reminder, reminder)
        #|> redirect(to: account_event_path(conn, :index, account_id))
      #{:error, changeset} ->
        #conn
        #|> assign(:changeset, changeset)
        #|> put_flash(:info, "Failed to delete reminder.")
        #|> render(account_event_path(conn, :index, account_id))
    #end
  end
  def restore(conn, _params) do 
    #%{:params => %{"account_id" => account_id, "id" => reminder_id}} = conn
    #reminder = Repo.get(Reminder, reminder_id)
    #changeset = Reminder.archive_changeset(reminder, %{active: true})
    #case Repo.update(changeset) do
      #{:ok, _reminder} -> 
        #conn
        #|> redirect(to: account_event_path(conn, :index, account_id))
      #{:error, changeset} ->
        #conn
        #|> assign(:changeset, changeset)
        #|> put_flash(:info, "Failed to restore reminder.")
        #|> render(account_event_path(conn, :index, account_id))
    #end
  end
end

