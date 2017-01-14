defmodule Carbon.Paginator do
  import Ecto.Query, only: [from: 2]
  alias Carbon.Repo

  @default_page "1"
  @default_length "25"

  defstruct [:page, :length, :total_length, :number_of_pages, :data]

  def create(query, params) do
    page = Map.get(params, "page", @default_page) |> Integer.parse() |> elem(0) |> max(1)
    length = Map.get(params, "length", @default_length) |> Integer.parse() |> elem(0) |> max(1)

    total_length = Repo.aggregate(query, :count, :id)

    new_query = from query,
      limit: ^length,
      offset: ^get_offset(page, length)

    %__MODULE__{
      page: page,
      length: length,
      total_length: total_length,
      number_of_pages: number_of_pages(total_length, length),
      data: Repo.all(new_query)
    }
  end

  defp number_of_pages(total_length, length_per_page) do
    round(Float.ceil(total_length / length_per_page))
  end

  defp get_offset(current_page, length_per_page) do
    (current_page - 1)  * length_per_page
  end

end
