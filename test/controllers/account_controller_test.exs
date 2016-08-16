defmodule Carbon.AccountControllerTest do
  use Carbon.ConnCase

  alias Carbon.{ Account, AccountTag, Address }

  setup do
    joe = Repo.insert! %Carbon.User{handle: "joe", email_hash: "joe"}
    customer_status = Repo.insert! %Carbon.AccountStatus{key: "CUST"}
    lead_status = Repo.insert! %Carbon.AccountStatus{key: "LEAD"}
    {:ok, [user: joe, customer_status: customer_status, lead_status: lead_status]}
  end

  test "creates resources and redirects when successful", %{conn: conn, user: joe, customer_status: customer} do
    conn = put_private(conn, :user_id, joe.id)
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

  test "updates resource", %{conn: conn, user: joe, customer_status: customer} do
    billing_address = Repo.insert! %Address{street_address: "", locality: "", region: "", country_name: ""}
    shipping_address = Repo.insert! %Address{street_address: "", locality: "", region: "", country_name: ""}
    account = Repo.insert! %Account{name: "", owner: joe, status: customer, shipping_address: shipping_address}

    conn = put_private(conn, :user_id, joe.id)
    put conn, account_path(conn, :update, account.id), account: %{
      name: "new name",
      status_id: customer.id,
      owner_id: joe.id,
      billing_address: %{ id: billing_address.id, street_address: "new street", locality: "", region: "", country_name: "" },
      shipping_address: %{ id: shipping_address.id, street_address: "new street", locality: "", region: "", country_name: "" },
      tags_id: ""
    }

    updated_account = Repo.get!(Account, account.id) |> Repo.preload([:billing_address, :shipping_address])

    assert updated_account.name == "new name"
    assert updated_account.billing_address.street_address == "new street"
    assert updated_account.shipping_address.street_address == "new street"
  end

  test "update ressource with tags", %{conn: conn, user: joe, customer_status: customer} do
    tag_a = Repo.insert! %AccountTag{description: "a"}
    tag_b = Repo.insert! %AccountTag{description: "b"}
    billing_address = Repo.insert! %Address{street_address: "", locality: "", region: "", country_name: ""}
    shipping_address = Repo.insert! %Address{street_address: "", locality: "", region: "", country_name: ""}
    account = Repo.insert! %Account{name: "", owner: joe, status: customer}

    conn = put_private(conn, :user_id, joe.id)
    put conn, account_path(conn, :update, account.id), account: %{
      name: "new name",
      status_id: customer.id,
      owner_id: joe.id,
      billing_address: %{ id: billing_address.id, street_address: "new street", locality: "", region: "", country_name: "" },
      shipping_address: %{ id: shipping_address.id, street_address: "new street", locality: "", region: "", country_name: "" },
      tags_id: "#{tag_a.id},#{tag_b.id}"
    }

    updated_account = Repo.get!(Account, account.id) |> Repo.preload([:tags])

    assert [ tag_a, tag_b ] == updated_account.tags
  end

  test "updates status", %{conn: conn, user: joe, customer_status: customer, lead_status: lead} do
    billing_address = Repo.insert! %Address{street_address: "", locality: "", region: "", country_name: ""}
    shipping_address = Repo.insert! %Address{street_address: "", locality: "", region: "", country_name: ""}
    account = Repo.insert! %Account{name: "", owner: joe, status: customer }

    conn = put_private(conn, :user_id, joe.id)
    put conn, account_path(conn, :update, account.id), account: %{
      name: "new name",
      status_id: lead.id,
      owner_id: joe.id,
      billing_address: %{ id: billing_address.id, street_address: "new street", locality: "", region: "", country_name: "" },
      shipping_address: %{ id: shipping_address.id, street_address: "new street", locality: "", region: "", country_name: "" },
      tags_id: ""
    }

    updated_account = Repo.get!(Account, account.id)

    assert updated_account.status_id == lead.id
  end

  test "update ressource with tags deletes old tags", %{conn: conn, user: joe, customer_status: customer} do
    tag_a = Repo.insert! %AccountTag{description: "a"}
    tag_b = Repo.insert! %AccountTag{description: "b"}
    billing_address = Repo.insert! %Address{street_address: "", locality: "", region: "", country_name: ""}
    shipping_address = Repo.insert! %Address{street_address: "", locality: "", region: "", country_name: ""}
    account = Repo.insert! %Account{name: "", owner: joe, status: customer, tags: [ tag_a ]}

    conn = put_private(conn, :user_id, joe.id)
    put conn, account_path(conn, :update, account.id), account: %{
      name: "new name",
      status_id: customer.id,
      owner_id: joe.id,
      billing_address: %{ id: billing_address.id, street_address: "new street", locality: "", region: "", country_name: "" },
      shipping_address: %{ id: shipping_address.id, street_address: "new street", locality: "", region: "", country_name: "" },
      tags_id: "#{tag_b.id}"
    }

    updated_account = Repo.get!(Account, account.id) |> Repo.preload([:tags])

    assert [ tag_b ] == updated_account.tags
    assert Repo.aggregate(AccountTag, :count, :id) == 2
  end
end
