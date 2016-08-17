defmodule Carbon.ContactController do
  use Carbon.Web, :controller

  def new(conn, _params) do
    conn
  end

  def create(conn, _params) do
    conn
  end

  def edit(conn, _params) do
    conn
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
