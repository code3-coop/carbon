defmodule Carbon.PageController do
  use Carbon.Web, :controller

  def index(conn, _params) do
    redirect conn, to: account_path(conn, :index)
  end
end
