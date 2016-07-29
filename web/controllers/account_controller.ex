defmodule Carbon.AccountController do
  use Carbon.Web, :controller

  alias Carbon.Account

  def index(conn, params) do
    query = from a in Account,
      where: a.active == true,
      order_by: a.name,
      limit: ^min(Map.get(params, "limit", 25), 25),
      offset: ^Map.get(params, "offset", 0),
      preload: [:contacts, :billing_address]
    render(conn, "index.html", accounts: Repo.all(query))
  end

  def new(conn, _params) do
    changeset = Account.changeset(%Account{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"account" => account_params}) do
    changeset = Account.changeset(%Account{}, account_params)

    case Repo.insert(changeset) do
      {:ok, _account} ->
        conn
        |> put_flash(:info, "Account created successfully.")
        |> redirect(to: account_path(conn, :index))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    account = Repo.get!(Account, id)
    render(conn, "show.html", account: account)
  end

  def edit(conn, %{"id" => id}) do
    account = Repo.get!(Account, id)
    changeset = Account.changeset(account)
    render(conn, "edit.html", account: account, changeset: changeset)
  end

  def update(conn, %{"id" => id, "account" => account_params}) do
    account = Repo.get!(Account, id)
    changeset = Account.changeset(account, account_params)

    case Repo.update(changeset) do
      {:ok, account} ->
        conn
        |> put_flash(:info, "Account updated successfully.")
        |> redirect(to: account_path(conn, :show, account))
      {:error, changeset} ->
        render(conn, "edit.html", account: account, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    account = Repo.get!(Account, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(account)

    conn
    |> put_flash(:info, "Account deleted successfully.")
    |> redirect(to: account_path(conn, :index))
  end
end
