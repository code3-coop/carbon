# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Carbon.Repo.insert!(%Carbon.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

use Timex
alias Carbon.{Repo, AccountStatus, Account, Contact, Address, Event, User, AccountTag, EventTag, Reminder}

paragraph = [
  "Lorem ipsum dolor sit amet, an viris virtute voluptatibus nec, sed cu dicunt diceret facilis. Praesent democritum pro ea, est delenit percipitur an.",
  "Ea cum quot civibus mandamus, pro et veniam ridens, salutatus dignissim ullamcorper cu sit. Sed cetero delicata similique ex. Deserunt mediocritatem ei has, te pericula constituto pri.",
  "Cu eum mutat tractatos maiestatis. Ea tale veri perpetua ius, sea cu modo noster praesent. Libris propriae ut vix, ea pri impetus suavitate euripidis. Vis equidem prodesset in, antiopam consequat nam ea.",
  "Duo ne appetere facilisis inciderint, est partem aliquip dolorem et, ut autem prompta vivendo sea. Et has velit epicurei indoctum, nam brute regione urbanitas in. Ius eu nostrud perpetua.",
  "Nobis mentitum sadipscing ad per, ne est munere sensibus. Eum inermis honestatis ex. Senserit partiendo definiebas eam id. Ut elit novum veniam per, ad tollit veniam omittam duo."
]

joe = Repo.insert! %User{ handle: "joe", full_name: "Joe", title: "Awesome", image_url: "/images/avatars/male/44.png", email_hash: (:crypto.hash(:sha, "joe@erlang.com") |> Base.encode16 |> String.downcase) }
mike = Repo.insert! %User{ handle: "mike", full_name: "Mike", title: "Awesome", image_url: "/images/avatars/male/39.png", email_hash: (:crypto.hash(:sha, "mike@erlang.com") |> Base.encode16 |> String.downcase) }
robert = Repo.insert! %User{ handle: "robert", full_name: "Robert", title: "Awesome", image_url: "/images/avatars/male/98.png", email_hash: (:crypto.hash(:sha, "robert@erlang.com") |> Base.encode16 |> String.downcase) }

lead_status = Repo.insert!(%AccountStatus{key: "lead"})
customer_status = Repo.insert!(%AccountStatus{key: "customer"})
former_customer_status = Repo.insert!(%AccountStatus{key: "former_customer"})

slow_payer = Repo.insert!(%AccountTag{description: "Slow payer", color: "red"})
usless_meeting = Repo.insert!(%EventTag{description: "Useless meeting", color: "red"})
noisy_office_tag = Repo.insert!(%AccountTag{description: "noisy-office", color: "violet"})
good_coffee_tag = Repo.insert!(%AccountTag{description: "good-coffee", color: "purple"})

billing_address_a = Repo.insert! %Address{street_address: "1 Billing Street", locality: "City A", region: "RA", country_name: "CA"}
billing_address_b = Repo.insert! %Address{street_address: "1 Billing Street", locality: "City B", region: "RB", country_name: "CB"}

shipping_address_a = Repo.insert! %Address{street_address: "1 Shipping Street", locality: "City A", region: "RA", country_name: "CA"}
shipping_address_b = Repo.insert! %Address{street_address: "1 Shipping Street", locality: "City B", region: "RB", country_name: "CB"}

account_a = Repo.insert!(%Account{name: "Account A", owner: joe, status: customer_status, billing_address: billing_address_a, shipping_address: shipping_address_a, tags: [noisy_office_tag, good_coffee_tag]})
account_b = Repo.insert!(%Account{name: "Account B", owner: mike, status: customer_status, billing_address: billing_address_b, shipping_address: shipping_address_b, tags: [good_coffee_tag]})

contact_a = Repo.insert!(%Contact{full_name: "Contact A", title: "CEO", email: "contact.a@company.a.com", tel: "+1 123-123-1234", account: account_a})
contact_b = Repo.insert!(%Contact{full_name: "Contact B", title: "CEO", email: "contact.b@company.b.com", tel: "+1 123-123-1234", account: account_b})
Repo.insert!(%Contact{full_name: "Other Contact", title: "Senior Marketing Director", email: "contact.b@company.b.com", tel: "+1 123-123-1234", account: account_b})


event_a_1 = Repo.insert! %Event{description: "1st meeting", date: Timex.now |> Timex.shift(days: 3) |> Timex.to_erl |> Ecto.DateTime.from_erl, account: account_a, user: joe, tags: [usless_meeting]}

for n <- -10..10 do
  Repo.insert! %Event{description: Enum.random(paragraph), date: Timex.now |> Timex.shift(days: n) |> Timex.to_erl |> Ecto.DateTime.from_erl, account: account_b, user: Enum.random([joe, mike, robert])}
end

reminder_a = Repo.insert! %Reminder{date: Ecto.DateTime.from_erl(:calendar.local_time), user: joe, event: event_a_1}

