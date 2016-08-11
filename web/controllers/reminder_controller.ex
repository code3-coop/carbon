defmodule Carbon.ReminderController do
  use Carbon.Web, :controller

  import Carbon.ControllerUtils

  alias Carbon.Reminder
  alias Carbon.Event

  def new(conn, %{"account_id" => account_id, "event_id" => event_id}) do
    changeset = Reminder.changeset(%Reminder{})
    conn
    |> assign(:changeset, changeset)
    |> assign(:account_id, account_id)
    |> assign(:event_id, event_id)
    |> render("new.html")  
  end

  def create(conn, %{"account_id" => account_id, "event_id" => event_id, "reminder" => reminder_params}) do
    current_user = conn.assigns[:current_user]
    reminder = %Reminder{user: current_user, event: Repo.get(Event, String.to_integer(event_id))}
    date = Ecto.DateTime.cast!("#{reminder_params["date"]} #{reminder_params["time"]}:00")
    changeset = Reminder.create_changeset(reminder, %{date:  date})
    case Repo.insert(changeset) do
      {:ok, _reminder} ->
        conn
        |> put_flash(:info, "Reminder created successfully.")
        |> redirect(to: account_event_path(conn, :index, account_id))
      {:error, changeset} -> 
        conn
        |> assign(:changeset, changeset)
        |> assign(:account_id, account_id)
        |> assign(:event_id, event_id)
        |> render("new.html")
    end
  end

  def delete(conn, _params) do 
    account_id = conn.params["account_id"]
    reminder_id = conn.params["id"]
    reminder = Repo.get(Reminder, reminder_id)
    case Repo.delete(reminder) do
      {:ok, reminder} -> 
        conn
        |> put_flash(:info, "Reminder created successfully.")
        |> redirect(to: account_event_path(conn, :index, account_id))
    end
  end
end
