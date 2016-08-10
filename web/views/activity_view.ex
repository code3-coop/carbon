defmodule Carbon.ActivityView do
  use Carbon.Web, :view
  
  def pastify_action(action) do
    case action do
      "add" -> "added"
      "delete" -> "deleted"
      "update" -> "updated"
    end
  end
end
