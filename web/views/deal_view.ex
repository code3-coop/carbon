defmodule Carbon.DealView do
  use Carbon.Web, :view
  import Ecto.Query, only: [from: 2]

  def humanize(:amount, number) do 
    Number.Currency.number_to_currency(number)
  end

  def probability_color(percentage) do
    cond do
      percentage >= 90 -> "green"
      percentage >= 75 -> "olive"
      percentage >= 60 -> "yellow"
      percentage >= 50 -> "red"
      true             -> "grey"
    end
  end
  def deal_tags_select do
    query = from dt in Carbon.DealTag,
      order_by: dt.id
    Carbon.Repo.all query
  end
  
end
