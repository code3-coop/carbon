defmodule Galaxy.AccountStatusControllerTest do
  use Galaxy.ConnCase

  alias Galaxy.AccountStatus
  @valid_attrs %{}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, account_status_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    account_status = Repo.insert! %AccountStatus{}
    conn = get conn, account_status_path(conn, :show, account_status)
    assert json_response(conn, 200)["data"] == %{"id" => account_status.id}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, account_status_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, account_status_path(conn, :create), account_status: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(AccountStatus, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, account_status_path(conn, :create), account_status: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    account_status = Repo.insert! %AccountStatus{}
    conn = put conn, account_status_path(conn, :update, account_status), account_status: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(AccountStatus, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    account_status = Repo.insert! %AccountStatus{}
    conn = put conn, account_status_path(conn, :update, account_status), account_status: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    account_status = Repo.insert! %AccountStatus{}
    conn = delete conn, account_status_path(conn, :delete, account_status)
    assert response(conn, 204)
    refute Repo.get(AccountStatus, account_status.id)
  end
end
