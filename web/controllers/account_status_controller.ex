defmodule Galaxy.AccountStatusController do
  use Galaxy.Web, :controller

  alias Galaxy.AccountStatus

  def index(conn, _params) do
    account_statuses = Repo.all(AccountStatus)
    render(conn, "index.json", account_statuses: account_statuses)
  end

  def create(conn, %{"account_status" => account_status_params}) do
    changeset = AccountStatus.changeset(%AccountStatus{}, account_status_params)

    case Repo.insert(changeset) do
      {:ok, account_status} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", account_status_path(conn, :show, account_status))
        |> render("show.json", account_status: account_status)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Galaxy.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    account_status = Repo.get!(AccountStatus, id)
    render(conn, "show.json", account_status: account_status)
  end

  def update(conn, %{"id" => id, "account_status" => account_status_params}) do
    account_status = Repo.get!(AccountStatus, id)
    changeset = AccountStatus.changeset(account_status, account_status_params)

    case Repo.update(changeset) do
      {:ok, account_status} ->
        render(conn, "show.json", account_status: account_status)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Galaxy.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    account_status = Repo.get!(AccountStatus, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(account_status)

    send_resp(conn, :no_content, "")
  end
end
