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

alias Carbon.{Repo, AccountStatus, Account, Contact, Address}

lead_status = Repo.insert!(%AccountStatus{key: "lead"})
customer_status = Repo.insert!(%AccountStatus{key: "customer"})
former_customer_status = Repo.insert!(%AccountStatus{key: "former_customer"})

account_a = Repo.insert!(%Account{name: "Account A", status: customer_status})
account_b = Repo.insert!(%Account{name: "Account B", status: customer_status})

contact_a = Repo.insert!(%Contact{name: "Contact A", given_name: "Contact", family_name: "A", email: "contact.a@company.a.com", tel: "+1 123-123-1234", account: account_a})
contact_b = Repo.insert!(%Contact{name: "Contact B", given_name: "Contact", family_name: "B", email: "contact.b@company.b.com", tel: "+1 123-123-1234", account: account_b})

billing_address_a = Repo.insert! %Address{street_address: "1 A Street", locality: "City A", region: "RA", country_name: "CA", account: account_a}
billing_address_b = Repo.insert! %Address{street_address: "1 B Street", locality: "City B", region: "RB", country_name: "CB", account: account_b}

