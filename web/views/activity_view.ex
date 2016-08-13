defmodule Carbon.ActivityView do
  use Carbon.Web, :view
  
  def past_tense(verb) do
    verb <> if String.ends_with?(verb, "e"), do: "d", else: "ed"
  end
  
  def singular(noun) do
    if String.ends_with?(noun, "s"), do: String.slice(noun, 0..-2), else: noun
  end

  def for_humans(field) do
    field
    |> String.replace(~r/_id$/, "")
    |> String.replace(~r/_/, " ")
  end
end
