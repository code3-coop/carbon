defmodule Carbon.AccountControllerTest do
  use Carbon.ConnCase

  alias Carbon.Account
  @valid_attrs %{}
  @invalid_attrs %{}

  setup do
    joe = Repo.insert! %Carbon.User{handle: "joe", email_hash: "joe"}
    {:ok, [user: joe]}
  end

  test "creates resources and redirects when successful", %{conn: conn, user: joe} do
    conn = put_token_req_cookie conn, joe.id
    conn = post conn, account_path(conn, :create), account: %{name: "test account 1"}

    account = Repo.get_by!(Account, %{name: "test account 1"})
    assert account.owner_id == joe.id
    assert redirected_to(conn) == account_path(conn, :show, account.id)
  end

  defp put_token_req_cookie(conn, user_id) do
    token_name = Carbon.SessionController.carbon_token_name
    put_resp_cookie(conn, token_name, Phoenix.Token.sign(Carbon.Endpoint, token_name, user_id))
  end

  # test "lists all entries on index", %{conn: conn} do
    # conn = put_token_cookie(conn)
    # conn = get conn, account_path(conn, :index)
    # assert html_response(conn, 200) =~ "Accounts"
  # end

  # test "renders form for new resources", %{conn: conn} do
    # conn = get conn, account_path(conn, :new)
    # assert html_response(conn, 200) =~ "New account"
  # end

  # test "creates resource and redirects when data is valid", %{conn: conn} do
    # conn = post conn, account_path(conn, :create), account: @valid_attrs
    # assert redirected_to(conn) == account_path(conn, :index)
    # assert Repo.get_by(Account, @valid_attrs)
  # end

  # test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    # conn = post conn, account_path(conn, :create), account: @invalid_attrs
    # assert html_response(conn, 200) =~ "New account"
  # end

  # test "shows chosen resource", %{conn: conn} do
    # conn = put_token_cookie(conn)
    # account = Repo.insert! %Account{owner_id: 1, status_id: 1}
    # conn = get conn, account_path(conn, :show, account)
    # assert html_response(conn, 200) =~ "Show account"
  # end

  # test "renders page not found when id is nonexistent", %{conn: conn} do
    # conn = put_token_cookie(conn)
    # assert_error_sent 404, fn ->
      # get conn, account_path(conn, :show, -1)
    # end
  # end

  # test "updates chosen resource and redirects when data is valid", %{conn: conn} do
    # account = Repo.insert! %Account{}
    # conn = put conn, account_path(conn, :update, account), account: @valid_attrs
    # assert redirected_to(conn) == account_path(conn, :show, account)
    # assert Repo.get_by(Account, @valid_attrs)
  # end

  # test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    # account = Repo.insert! %Account{}
    # conn = put conn, account_path(conn, :update, account), account: @invalid_attrs
    # assert html_response(conn, 200) =~ "Edit account"
  # end

  # test "deletes chosen resource", %{conn: conn} do
    # account = Repo.insert! %Account{}
    # conn = delete conn, account_path(conn, :delete, account)
    # assert redirected_to(conn) == account_path(conn, :index)
    # refute Repo.get(Account, account.id)
  # end

end
