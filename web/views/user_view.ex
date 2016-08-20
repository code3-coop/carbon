defmodule Carbon.UserView do
  use Carbon.Web, :view
  import Carbon.ViewHelpers, only: [humanize: 2, probability_color: 1]

  def pluck_join(l, pluck_prop, joiner) do
    l
    |> Enum.map(&(&1."key"))
    |> Enum.join(joiner)
  end

end
