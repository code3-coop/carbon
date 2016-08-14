defmodule Carbon.ViewHelpers do
  import Ecto.Query, only: [from: 2]

  def account_status_select do
    query = from s in Carbon.AccountStatus,
      select: {s.key, s.id},
      order_by: s.id
    Carbon.Repo.all query
  end

  def account_tags_select do
    query = from at in Carbon.AccountTag,
      order_by: at.id
    Carbon.Repo.all query
  end
  def deal_tags_select do
    query = from dt in Carbon.DealTag,
      order_by: dt.id
    Carbon.Repo.all query
  end
  def event_tags_select do
    query = from et in Carbon.EventTag,
      order_by: et.id
    Carbon.Repo.all query
  end

  def account_user_select do
    query = from u in Carbon.User,
      select: %{full_name: u.full_name, id: u.id, image_url: u.image_url},
      order_by: u.id
    Carbon.Repo.all query
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

end
