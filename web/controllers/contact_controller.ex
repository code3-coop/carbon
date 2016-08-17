defmodule Carbon.ContactController do
  use Carbon.Web, :controller
  import Carbon.ControllerUtils

  def new(conn, _params) do
    conn
  end

  def create(conn, _params) do
    conn
  end

  def edit(conn, %{"account_id" => account_id, "id" => contact_id}) do
    contact = Repo.get(Carbon.Contact, contact_id) |> Repo.preload(:tags)
    conn
    |> assign(:account_id, account_id)
    |> assign(:contact, contact)
    |> assign(:changeset, Carbon.Contact.changeset(contact))
    |> render("edit.html")
  end

  def update(conn, %{"account_id" => account_id, "id" => contact_id, "contact" => contact_params}) do
    current_user = conn.assigns[:current_user]
    tags = get_tags_from(Carbon.ContactTag, contact_params)
    contact = Repo.get!(Carbon.Contact, contact_id) |> Repo.preload([:tags])
    changeset = Carbon.Contact.changeset(contact, contact_params) |> Ecto.Changeset.put_assoc(:tags, Enum.map(tags, &Ecto.Changeset.change/1))

    case Repo.update(changeset) do
      {:ok, contact} ->
        Carbon.Activity.new(account_id, current_user.id, :update, :contacts, contact.id, changeset)
        conn
        |> put_flash(:info, "Contacts updated successfully.")
        |> redirect(to: account_path(conn, :show, account_id))
      {:error, changeset} ->
        conn
        |> assign(:account_id, account_id)
        |> assign(:contact, contact)
        |> assign(:changeset, changeset)
        |> render("edit.html")
    end
  end

  def delete(conn, _params) do
    conn
  end

  def restore(conn, _params) do
    conn
  end
end
