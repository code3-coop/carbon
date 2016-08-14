defmodule Carbon.DealView do
  use Carbon.Web, :view

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
  
end
