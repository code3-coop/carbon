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

alias Carbon.{Repo, AccountStatus, Account, Contact, Address, Event, User, AccountTag, EventTag, Reminder}


joe = Repo.insert! %User{ handle: "joe", full_name: "Joe", title: "Awesome", email_hash: (:crypto.hash(:sha, "joe@erlang.com") |> Base.encode16 |> String.downcase) }

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
account_b = Repo.insert!(%Account{name: "Account B", owner: joe, status: customer_status, billing_address: billing_address_b, shipping_address: shipping_address_b, tags: [good_coffee_tag]})

contact_a = Repo.insert!(%Contact{full_name: "Contact A", email: "contact.a@company.a.com", tel: "+1 123-123-1234", account: account_a})
contact_b = Repo.insert!(%Contact{full_name: "Contact B", email: "contact.b@company.b.com", tel: "+1 123-123-1234", account: account_b})


event_a_1 = Repo.insert! %Event{description: "1st meeting", date: Ecto.DateTime.from_erl(:calendar.local_time), account: account_a, user: joe, tags: [usless_meeting]}
event_a_2 = Repo.insert! %Event{description: "2nd meeting", date: Ecto.DateTime.from_erl(:calendar.local_time), account: account_a, user: joe}

event_b_1 = Repo.insert! %Event{description: "1st meeting", date: Ecto.DateTime.from_erl(:calendar.local_time), account: account_b, user: joe}
event_b_2 =Repo.insert! %Event{description: "2nd meeting", date: Ecto.DateTime.from_erl(:calendar.local_time), account: account_b, user: joe}

reminder_a = Repo.insert! %Reminder{date: Ecto.DateTime.from_erl(:calendar.local_time), user: joe, event: event_a_1}

