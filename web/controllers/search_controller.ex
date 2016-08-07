defmodule Carbon.SearchController do
  use Carbon.Web, :controller
  alias Carbon.{ Account }

  @search_query "
    select
        s.id
      , s.matched_table
      , s.matched_column
    from search_index as s
    where s.search_vector @@ to_tsquery($1)
    order by ts_rank(s.search_vector, to_tsquery($1)) desc;
  "

  @similar_term_query "
    select word 
    from search_words
    where similarity(word, $1) > 0.5 
    order by word <-> $1
    limit 1;
  "

  def search(conn, %{ "q" => user_query }) do
    case Ecto.Adapters.SQL.query(Repo, @search_query, [ user_query ]) do
      {:ok, %{:num_rows => 0}} ->
        conn
        |> select_similar_term(user_query)
        |> assign(:matches_by_account, %{})
        |> assign(:accounts, [])
        |> render(Carbon.AccountView, "index.html")
      {:ok, %{:rows => rows}} ->
        conn
        |> assign(:similar, nil)
        |> assign(:matches_by_account_id, build_matches_by_account_dict(rows))
        |> select_matching_accounts(rows)
        |> render(Carbon.AccountView, "index.html")
      {:error, _e} ->
        conn
        |> put_flash(:error, "Error while executing search")
        |> render(Carbon.AccountView, "index.html")
    end
  end

  defp select_similar_term(conn, user_query) do
    case Ecto.Adapters.SQL.query(Repo, @similar_term_query, [ user_query ]) do
      {:ok, %{:num_rows => 0}} ->
        assign(conn, :similar, nil)
      {:ok, %{:rows => rows}} ->
        assign(conn, :similar, hd rows)
      {:error, _e} ->
        put_flash(conn, :error, "Error while executing search")
    end
  end

  defp build_matches_by_account_dict(rows) do
    Enum.reduce rows, %{}, fn (row, dict) ->
      Map.update(dict, Enum.at(row, 0), [ row ], &([ row | &1 ]))
    end
  end

  defp select_matching_accounts(conn, rows) do
    account_ids = rows |> MapSet.new(&Enum.at(&1, 0)) |> MapSet.to_list
    query = from a in Account,
      where: a.id in ^account_ids,
      left_join: c in assoc(a, :contacts),
      left_join: b in assoc(a, :billing_address),
      preload: [contacts: c, billing_address: b]
    assign(conn, :accounts, Repo.all(query))
  end
end
