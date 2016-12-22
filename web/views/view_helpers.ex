defmodule Carbon.ViewHelpers do
  import Ecto.Query, only: [from: 2]

  def account_status_select do
    query = from s in Carbon.AccountStatus,
      select: {s.key, s.id},
      order_by: s.id
    Carbon.Repo.all query
  end

  def account_user_select do
    query = from u in Carbon.User,
      select: %{full_name: u.full_name, id: u.id, image_url: u.image_url},
      order_by: u.id
    Carbon.Repo.all query
  end

  def account_tags_select do
    Carbon.Repo.all from Carbon.AccountTag, where: [active: true], order_by: [:id]
  end
  def contact_tags_select do
    Carbon.Repo.all from Carbon.ContactTag, where: [active: true], order_by: [:id]
  end
  def deal_tags_select do
    Carbon.Repo.all from Carbon.DealTag, where: [active: true], order_by: [:id]
  end
  def event_tags_select do
    Carbon.Repo.all from Carbon.EventTag, where: [active: true], order_by: [:id]
  end
  def timehseet_entry_tags_select do
    Carbon.Repo.all from Carbon.TimesheetEntryTag, where: [active: true], order_by: [:id]
  end

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

  def icon_for_field_type("date"), do: "calendar"
  def icon_for_field_type("long_text"), do: "font"
  def icon_for_field_type("text"), do: "font"
  def icon_for_field_type("reference"), do: "reply"
  def icon_for_field_type("integer"), do: "calculator"
  def icon_for_field_type("float"), do: "calculator"
  def icon_for_field_type("currency"), do: "dollar"
  def icon_for_field_type("enum"), do: "list"
  def icon_for_field_type(type), do: IO.inspect( type)


end
