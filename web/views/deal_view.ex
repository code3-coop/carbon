defmodule Carbon.DealView do
  use Carbon.Web, :view

  def humanize(:amount, number) do 
    Number.Currency.number_to_currency(number)
  end
  
end
