defmodule Carbon.AccountController do
  use Carbon.Web, :controller

  import Carbon.ControllerUtils

  alias Carbon.Account

  @search_query "
    select
        s.id
      , s.matched_table
      , s.matched_column
    from search_index as s
    where s.search_vector @@ plainto_tsquery('simple', $1);
  "

  @similar_term_query "
    select word 
    from search_words
    where similarity(word, $1) > 0.5 
    order by word <-> $1
    limit 1;
  "

  def index(conn, %{ "search" => %{ "query" => user_query } } = params) when user_query != "" do
    all_rows = user_query
    |> String.split(~r{\s+}, trim: true)
    |> Enum.map(&Task.async(Ecto.Adapters.SQL, :query, [Repo, @search_query, [ &1 ]]))
    |> Enum.map(&Task.await/1)
    |> Enum.map(&extract_rows/1)

    ids = all_rows
    |> Enum.map(&build_set_of_ids/1)
    |> Enum.reduce(&MapSet.intersection/2)
    |> MapSet.to_list

    if Enum.empty?(ids) do
      conn
      |> assign(:similar, select_similar_term(user_query))
      |> assign(:query, user_query)
      |> render(Carbon.AccountView, "index.html")
    else
      conn
      |> assign(:matches_by_account_id, build_and_merge_matches_dicts(all_rows))
      |> assign(:accounts, select_matching_accounts(ids, params))
      |> assign(:query, user_query)
      |> render(Carbon.AccountView, "index.html")
    end

  end
  
  def index(conn, params) do
    query = from a in Account,
      left_join: c in assoc(a, :contacts),
      left_join: b in assoc(a, :billing_address),
      where: a.active == true,
      order_by: a.name,
      limit: ^min(Map.get(params, "limit", 25), 25),
      offset: ^Map.get(params, "offset", 0),
      preload: [contacts: c, billing_address: b]
    render(conn, "index.html", accounts: Repo.all(query))
  end
  

  def new(conn, _params) do
    changeset = Account.changeset(%Account{contacts: [%Carbon.Contact{}]})
    conn
    |> assign(:changeset, changeset)
    |> render("new.html")
  end

  def create(conn, %{"account" => account_params}) do
    current_user = conn.assigns[:current_user]
    changeset = Account.create_changeset(%Account{owner: current_user}, account_params)

    case Repo.insert(changeset) do
      {:ok, account} ->
        Carbon.Activity.new(account.id, current_user.id, :create, :accounts, account.id, Account.short_desc(account))
        conn
        |> put_flash(:info, "Account created successfully.")
        |> redirect(to: account_path(conn, :show, account.id))
      {:error, changeset} ->
        conn
        |> assign(:changeset, changeset)
        |> render("new.html")
    end
  end

  def show(conn, %{"id" => id}) do
    current_user = conn.assigns[:current_user]

    query = from a in Account,
      where: a.id == ^id,
      join: s in assoc(a, :status),
      join: o in assoc(a, :owner),
      left_join: ba in assoc(a, :billing_address),
      left_join: sa in assoc(a, :shipping_address),
      left_join: e in Carbon.Event, on: e.account_id == a.id and ago(1, "year") <= e.date and e.date <= from_now(1, "year"),
      left_join: eu in assoc(e, :user),
      left_join: er in Carbon.Reminder, on: er.event_id == e.id and er.user_id == ^current_user.id,
      left_join: et in assoc(e, :tags),
      left_join: d in assoc(a, :deals),
      left_join: dt in assoc(d, :tags),
      left_join: c in assoc(a, :contacts),
      left_join: ct in assoc(c, :tags),
      left_join: t in assoc(a, :tags),
      preload: [
        status: s,
        owner: o,
        billing_address: ba,
        shipping_address: sa,
        events: {e, user: eu, reminders: er, tags: et},
        deals: {d, tags: dt},
        contacts: {c, tags: ct},
        tags: t
      ]
    account = Repo.one(query)
    render(conn, "show.html", account: account)
  end

  def edit(conn, %{"id" => id}) do
    account_query = from a in Account,
      where: a.id == ^id,
      join: s in assoc(a, :status),
      join: o in assoc(a, :owner),
      left_join: ba in assoc(a, :billing_address),
      left_join: sa in assoc(a, :shipping_address),
      left_join: t in assoc(a, :tags),
      preload: [
        status: s,
        owner: o,
        billing_address: ba,
        shipping_address: sa,
        tags: t
      ]
    account = Repo.one(account_query)
    changeset = Account.changeset(account)

    render(conn, "edit.html", account: account, changeset: changeset)
  end

  def update(conn, %{"id" => id, "account" => account_params}) do
    current_user = conn.assigns[:current_user]
    tags = get_tags_from(Carbon.AccountTag, account_params)
    account = Repo.get!(Account, id) |> Repo.preload([:status, :owner, :billing_address, :shipping_address, :tags])
    changeset = Account.update_changeset(account, account_params, tags)

    case Repo.update(changeset) do
      {:ok, account} ->
        Carbon.Activity.new(account.id, current_user.id, :update, :accounts, account.id, Account.short_desc(account))
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


  defp extract_rows({:error, _}), do: []
  defp extract_rows({:ok, %{:num_rows => 0}}), do: []
  defp extract_rows({:ok, %{:rows => rows}}), do: rows

  defp build_set_of_ids(rows) do
    rows
    |> Enum.map(&Enum.at(&1, 0))
    |> MapSet.new
  end

  defp build_and_merge_matches_dicts(all_rows) do
    all_rows
    |> Enum.map(&build_matches_by_account_dict/1)
    |> Enum.reduce(&(Map.merge(&1, &2, fn (_id, m1, m2) -> Enum.concat(m1, m2) end)))
  end

  defp build_matches_by_account_dict(rows) do
    Enum.reduce rows, %{}, fn (row, dict) ->
      Map.update(dict, Enum.at(row, 0), [ row ], &([ row | &1 ]))
    end
  end

  defp select_similar_term(user_query) do
    case Ecto.Adapters.SQL.query(Repo, @similar_term_query, [ user_query ]) do
      {:error, _e} -> nil
      {:ok, %{:num_rows => 0}} -> nil
      {:ok, %{:rows => rows}} -> hd rows
    end
  end

  defp select_matching_accounts(account_ids, params) do
    query = from a in Account,
      left_join: c in assoc(a, :contacts),
      left_join: b in assoc(a, :billing_address),
      where: a.id in ^account_ids and a.active == true,
      order_by: a.name,
      limit: ^min(Map.get(params, "limit", 25), 25),
      offset: ^Map.get(params, "offset", 0),
      preload: [contacts: c, billing_address: b]
    Repo.all(query)
  end
end
