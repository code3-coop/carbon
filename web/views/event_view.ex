defmodule Carbon.EventView do
  use Carbon.Web, :view
  import Ecto.Query, only: [from: 2]
  
  def event_tags_select do
    query = from et in Carbon.EventTag,
      order_by: et.id
    Carbon.Repo.all query
  end
  
end
