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

alias Carbon.{
  Account,
  AccountStatus,
  AccountTag,
  Address,
  Contact,
  Event,
  EventTag,
  Project,
  ProjectTag,
  Reminder,
  Repo,
  User,
  Deal,
  DealTag,
  TimesheetStatus,
  Timesheet
}

#
# Sample data
#

{ today, _time } = :calendar.local_time

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

lead_status = Repo.insert!(%AccountStatus{key: "lead", color: "olive"})
customer_status = Repo.insert!(%AccountStatus{key: "customer", color: "green"})
former_customer_status = Repo.insert!(%AccountStatus{key: "former_customer", "grey"})

usless_meeting = Repo.insert!(%EventTag{description: "Useless meeting", color: "red"})

slow_payer = Repo.insert!(%AccountTag{description: "bad-payer", color: "red"})
noisy_office_tag = Repo.insert!(%AccountTag{description: "noisy-office", color: "violet"})
good_coffee_tag = Repo.insert!(%AccountTag{description: "good-coffee", color: "purple"})
Repo.insert!(%AccountTag{description: "friendly", color: "green"})
Repo.insert!(%AccountTag{description: "great-food", color: "olive"})

development_tag = Repo.insert! %ProjectTag{description: "development", color: "blue"}
consulting_tag = Repo.insert! %ProjectTag{description: "consulting", color: "violet"}
training_tag = Repo.insert! %ProjectTag{description: "training", color: "purple"}

billing_address_a = Repo.insert! %Address{street_address: "1 Billing Street", locality: "City A", region: "RA", country_name: "CA"}
billing_address_b = Repo.insert! %Address{street_address: "1 Billing Street", locality: "City B", region: "RB", country_name: "CB"}

shipping_address_a = Repo.insert! %Address{street_address: "1 Shipping Street", locality: "City A", region: "RA", country_name: "CA"}
shipping_address_b = Repo.insert! %Address{street_address: "1 Shipping Street", locality: "City B", region: "RB", country_name: "CB"}

account_a = Repo.insert!(%Account{name: "Account A", owner: joe, status: customer_status, billing_address: billing_address_a, shipping_address: shipping_address_a, tags: [noisy_office_tag, good_coffee_tag]})
account_b = Repo.insert!(%Account{name: "Account B", owner: mike, status: customer_status, billing_address: billing_address_b, shipping_address: shipping_address_b, tags: [good_coffee_tag]})

contact_a = Repo.insert!(%Contact{full_name: "Contact A", title: "CEO", email: "contact.a@company.a.com", tel: "+1 123-123-1234", image_url: "/images/avatars/female/5.png", account: account_a})
contact_b = Repo.insert!(%Contact{full_name: "Contact B", title: "CEO", email: "contact.b@company.b.com", tel: "+1 123-123-1234", image_url: "/images/avatars/female/15.png", account: account_b})
Repo.insert!(%Contact{full_name: "Other Contact", title: "Senior Marketing Director", email: "contact.b@company.b.com", tel: "+1 123-123-1234", image_url: "/images/avatars/female/20.png", account: account_b})

event_a_1 = Repo.insert! %Event{description: "1st meeting", date: Ecto.Date.from_erl(today), account: account_a, user: joe, tags: [usless_meeting]}

for n <- -10..10 do
  event_date = :calendar.gregorian_days_to_date(:calendar.date_to_gregorian_days(today) + n)
  Repo.insert! %Event{description: Enum.random(paragraph), date: Ecto.Date.from_erl(event_date), account: account_b, user: Enum.random([joe, mike, robert])}
end

reminder_a = Repo.insert! %Reminder{date: Ecto.DateTime.from_erl(:calendar.local_time), user: joe, event: event_a_1}

Repo.insert! %Project{code: "AAA", description: "Project AAA description", account: account_b, tags: [development_tag, consulting_tag] }
Repo.insert! %Project{code: "BBB", description: "Project BBB description", account: account_b, tags: [consulting_tag, training_tag] }
Repo.insert! %Project{code: "CCC", description: "Project CCC description", account: account_b }

casual_tag = Repo.insert! %DealTag{description: "show-me-the-money", color: "blue"}
job_tag = Repo.insert! %DealTag{description: "job", color: "black"}
gordon_gekko_tag = Repo.insert! %DealTag{description: "gordon-gekko", color: "green"}

Repo.insert! %Deal{description: Enum.random(paragraph), account: account_a, owner: robert, tags: [casual_tag], probability: 100 }
Repo.insert! %Deal{description: Enum.random(paragraph), account: account_a, owner: joe, tags: [job_tag], probability: 80, expected_value: 100, closing_date: Ecto.Date.from_erl(today), closed_value: 40_000}
Repo.insert! %Deal{description: Enum.random(paragraph), account: account_a, owner: mike, tags: [gordon_gekko_tag], probability: 80, expected_value: 1_000_00 }

draft_status = Repo.insert! %TimesheetStatus{key: "Draft"}
candidate_status =Repo.insert! %TimesheetStatus{key: "Candidate"}
approved_status = Repo.insert! %TimesheetStatus{key: "Approved"}
rejected_status = Repo.insert! %TimesheetStatus{key: "Rejected"}

Repo.insert! %Timesheet{status: draft_status, user: joe, start_date: Ecto.Date.from_erl(today), notes: "abc" }
#
# Full-text search materialized views and indexes
#

Ecto.Adapters.SQL.query! Carbon.Repo, "
  create extension if not exists pg_trgm;
"

Ecto.Adapters.SQL.query! Carbon.Repo, "
  drop index if exists idx_fts_search;
"

Ecto.Adapters.SQL.query! Carbon.Repo, "
  drop materialized view if exists search_index;
"

Ecto.Adapters.SQL.query! Carbon.Repo, "
  create materialized view search_index as (

    select
        a.id as id
      , 'account' as matched_table
      , 'name' as matched_column
      , setweight(to_tsvector('simple', a.name), 'A') as search_vector
    from accounts as a

    union

    select
        a.id as id
      , 'account' as matched_table
      , 'status' as matched_column
      , setweight(to_tsvector('simple', s.key), 'C') as search_vector
    from accounts as a
      left join account_statuses as s on a.status_id = s.id

    union

    select
        a.id as id
      , 'account' as matched_table
      , 'tags' as matched_columns
      , setweight(to_tsvector('simple', string_agg(at.description, ' ')), 'C') as search_vector
    from accounts as a
      left join j_accounts_tags as jat on jat.account_id = a.id
      left join account_tags as at on at.id = jat.account_tag_id
    group by a.id

    union

    select
        a.id as id
      , 'contact' as matched_table
      , 'name' as matched_column
      , setweight(to_tsvector('simple', string_agg(c.full_name, ' ')), 'A') as search_vector
    from accounts as a
      left join contacts as c on c.account_id = a.id
    group by a.id

  );
"

Ecto.Adapters.SQL.query! Carbon.Repo, "
  create index idx_fts_search on search_index using gin(search_vector);
"

Ecto.Adapters.SQL.query! Carbon.Repo, "
  drop index if exists words_idx;
"

Ecto.Adapters.SQL.query! Carbon.Repo, "
  drop materialized view if exists search_words;
"

Ecto.Adapters.SQL.query! Carbon.Repo, "
  create materialized view search_words as
  select word from ts_stat ('

    select
      to_tsvector(''simple'', a.name) as search_vector
    from accounts as a

    union

    select
      to_tsvector(''simple'', s.key) as search_vector
    from accounts as a
      left join account_statuses as s on a.status_id = s.id

    union

    select
      to_tsvector(''simple'',string_agg(at.description, '' '')) as search_vector
    from accounts as a
      left join j_accounts_tags as jat on jat.account_id = a.id
      left join account_tags as at on at.id = jat.account_tag_id

    union

    select
      to_tsvector(''simple'', string_agg(c.full_name, '' '')) as search_vector
    from accounts as a
      left join contacts as c on c.account_id = a.id

  ');
"

Ecto.Adapters.SQL.query! Carbon.Repo, "
  create index words_idx on search_words using gin(word gin_trgm_ops);
"
