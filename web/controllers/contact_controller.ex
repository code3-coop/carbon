defmodule Carbon.ContactController do
  use Carbon.Web, :controller

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

  def update(conn, _params) do
    conn
  end

  def delete(conn, _params) do
    conn
  end

  def restore(conn, _params) do
    conn
  end
end
