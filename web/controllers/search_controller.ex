defmodule Carbon.SearchController do
  use Carbon.Web, :controller
  alias Carbon.{ Account }

  @search_query "
    select
        s.id
      , s.matched_table
      , s.matched_column
    from search_index as s
    where s.search_vector @@ plainto_tsquery('simple', $1)
    order by ts_rank(s.search_vector, plainto_tsquery('simple', $1)) desc;
  "

  @similar_term_query "
    select word 
    from search_words
    where similarity(word, $1) > 0.5 
    order by word <-> $1
    limit 1;
  "

  def search(conn, %{ "search" => %{ "query" => user_query }}) do
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
      |> assign(:matches_by_account_id, %{})
      |> assign(:accounts, [])
      |> assign(:query, user_query)
      |> render(Carbon.AccountView, "index.html")
    else
      conn
      |> assign(:similar, nil)
      |> assign(:matches_by_account_id, build_and_merge_matches_dicts(all_rows))
      |> assign(:accounts, select_matching_accounts(ids))
      |> assign(:query, user_query)
      |> render(Carbon.AccountView, "index.html")
    end
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

  defp select_matching_accounts(account_ids) do
    query = from a in Account,
      where: a.id in ^account_ids,
      left_join: c in assoc(a, :contacts),
      left_join: b in assoc(a, :billing_address),
      preload: [contacts: c, billing_address: b]
    Repo.all(query)
  end
end
