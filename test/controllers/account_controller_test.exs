defmodule Carbon.AccountControllerTest do
  use Carbon.ConnCase

  alias Carbon.Account

  setup do
    joe = Repo.insert! %Carbon.User{handle: "joe", email_hash: "joe"}
    customer_status = Repo.insert! %Carbon.AccountStatus{key: "CUST"}
    {:ok, [user: joe, customer_status: customer_status]}
  end

  test "creates resources and redirects when successful", %{conn: conn, user: joe, customer_status: customer} do
    conn = put_token_req_cookie conn, joe.id
    conn = post conn, account_path(conn, :create), account: %{
      name: "test account 1",
      status_id: customer.id,
      contacts: [
        %{full_name: "test contact 1"}
      ]
    }

    account = Repo.one from a in Account, where: a.name == "test account 1", preload: [:contacts, :status]
    assert account != nil
    assert account.owner_id == joe.id
    assert account.status_id != nil
    assert account.status.key == customer.key
    assert (hd account.contacts).full_name == "test contact 1"
    assert redirected_to(conn) == account_path(conn, :show, account.id)
  end

  defp put_token_req_cookie(conn, user_id) do
    token_name = Carbon.SessionController.carbon_token_name
    put_req_cookie(conn, token_name, Phoenix.Token.sign(Carbon.Endpoint, token_name, user_id))
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
