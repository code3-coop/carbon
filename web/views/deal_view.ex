defmodule Carbon.DealView do
  use Carbon.Web, :view
  import Carbon.ViewHelpers, only: [humanize: 2, probability_color: 1, deal_tags_select: 0]
  
end
