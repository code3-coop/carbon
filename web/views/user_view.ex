defmodule Carbon.UserView do
  use Carbon.Web, :view
  def pluck_join(l, pluck_prop, joiner) do
    l
    |> Enum.map(&(&1."key"))
    |> Enum.join(joiner)
  end

end
