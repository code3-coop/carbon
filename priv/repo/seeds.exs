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
  Attachment,
  Contact,
  Event,
  EventTag,
  Project,
  ProjectTag,
  Reminder,
  Repo,
  User,
  Role,
  Deal,
  DealTag,
  TimesheetStatus,
  Timesheet,
  TimesheetEntryTag,
  Workflow,
}

alias Carbon.Workflow.{
  Field,
  Section,
  Instance,
  State,
  Value,
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

problem_solvers = Repo.insert! %Role{ key: "Problem solver", description: "People who take time to think about problems, then produce a pretty good solution."}
ex_physicist = Repo.insert! %Role{ key: "Ex-Physicist", description: "They did strang things before, now they fill better."}
cloud_shovelers = Repo.insert! %Role{ key: "Cloud shovelers", description: "I prefer not to talk about this kind of persons."}
managers  = Repo.insert! %Role{ key: "Managers", description: "they can help"}

joe = Repo.insert! %User{ handle: "joe", full_name: "Joe", title: "Awesome", image_url: "/images/avatars/male/44.png", email: "joe@erlang.com", roles: [problem_solvers, ex_physicist] }
mike = Repo.insert! %User{ handle: "mike", full_name: "Mike", title: "Awesome", image_url: "/images/avatars/male/39.png", email: "mike@erlang.com", roles: [problem_solvers] }
robert = Repo.insert! %User{ handle: "robert", full_name: "Robert", title: "Awesome", image_url: "/images/avatars/male/98.png", email: "robert@erlang.com", roles: [problem_solvers] }
system = Repo.insert! %User{ handle: "clint", full_name: "System", title: "Root", image_url: "/images/avatars/male/16.png", email: "clint@carbon-app.com", roles: [] }

lead_status = Repo.insert!(%AccountStatus{key: "lead", color: "olive"})
customer_status = Repo.insert!(%AccountStatus{key: "customer", color: "green"})
former_customer_status = Repo.insert!(%AccountStatus{key: "former_customer", color: "grey"})

usless_meeting = Repo.insert!(%EventTag{description: "Useless meeting", color: "red"})

slow_payer = Repo.insert!(%AccountTag{description: "bad-payer", color: "red"})
noisy_office_tag = Repo.insert!(%AccountTag{description: "noisy-office", color: "violet"})
good_coffee_tag = Repo.insert!(%AccountTag{description: "good-coffee", color: "purple"})
Repo.insert!(%AccountTag{description: "friendly", color: "green"})
Repo.insert!(%AccountTag{description: "great-food", color: "olive"})

development_tag = Repo.insert! %ProjectTag{description: "development", color: "blue"}
consulting_tag = Repo.insert! %ProjectTag{description: "consulting", color: "violet"}
training_tag = Repo.insert! %ProjectTag{description: "training", color: "purple"}

initiation = Repo.insert! %Carbon.Project.Phase{name: "initiation", presentation_order_index: 0}
definition = Repo.insert! %Carbon.Project.Phase{name: "definition", presentation_order_index: 1}
design = Repo.insert! %Carbon.Project.Phase{name: "design", presentation_order_index: 2}
development = Repo.insert! %Carbon.Project.Phase{name: "development", presentation_order_index: 3}
implementation = Repo.insert! %Carbon.Project.Phase{name: "implementation", presentation_order_index: 4}
followup = Repo.insert! %Carbon.Project.Phase{name: "followup", presentation_order_index: 5}

billing_address_a = Repo.insert! %Address{street_address: "1 Billing Street", locality: "City A", region: "RA", country_name: "CA"}
billing_address_b = Repo.insert! %Address{street_address: "1 Billing Street", locality: "City B", region: "RB", country_name: "CB"}

shipping_address_a = Repo.insert! %Address{street_address: "1 Shipping Street", locality: "City A", region: "RA", country_name: "CA"}
shipping_address_b = Repo.insert! %Address{street_address: "1 Shipping Street", locality: "City B", region: "RB", country_name: "CB"}

account_attachment = Repo.insert! %Attachment{user: joe, name: "loremipsum.txt", description: "A few paragraphs of the Lorem ipsum...", mimetype: "text/plain", base64_content: Base.encode64(Enum.join(paragraph, "\n"))}
joes_spreadsheet = Repo.insert! %Attachment{user: joe, private: true, name: "joes_spreadsheet.xls", description: "This is Joe's awesome spreasheet. It's not an actual file so don't try downloading it :)", mimetype: "application/vnd.ms-excel", base64_content: Base.encode64(Enum.join(paragraph, "\n"))}

account_a = Repo.insert!(%Account{name: "Account A", owner: joe, status: customer_status, billing_address: billing_address_a, shipping_address: shipping_address_a, tags: [noisy_office_tag, good_coffee_tag]})
account_b = Repo.insert!(%Account{name: "Account B", owner: mike, status: customer_status, billing_address: billing_address_b, shipping_address: shipping_address_b, tags: [good_coffee_tag], attachments: [ joes_spreadsheet, account_attachment ]})

contact_a = Repo.insert!(%Contact{full_name: "Contact A", title: "CEO", email: "contact.a@company.a.com", tel: "+1 123-123-1234", image_url: "/images/avatars/female/5.png", account: account_a})
contact_b = Repo.insert!(%Contact{full_name: "Contact B", title: "CEO", email: "contact.b@company.b.com", tel: "+1 123-123-1234", image_url: "/images/avatars/female/15.png", account: account_b})
Repo.insert!(%Contact{full_name: "Other Contact", title: "Senior Marketing Director", email: "contact.b@company.b.com", tel: "+1 123-123-1234", image_url: "/images/avatars/female/20.png", account: account_b})

event_a_1 = Repo.insert! %Event{description: "1st meeting", date: Ecto.Date.from_erl(today), account: account_a, user: joe, tags: [usless_meeting]}

for n <- -10..10 do
  event_date = :calendar.gregorian_days_to_date(:calendar.date_to_gregorian_days(today) + n)
  Repo.insert! %Event{description: Enum.random(paragraph), private: Enum.random([true, false]), date: Ecto.Date.from_erl(event_date), account: account_b, user: Enum.random([joe, mike, robert])}
end

reminder_a = Repo.insert! %Reminder{date: Ecto.DateTime.from_erl(:calendar.local_time), user: joe, event: event_a_1}

Repo.insert! %Project{code: "AAA", description: "Project AAA description", account: account_b, phase: design, tags: [development_tag, consulting_tag] }
Repo.insert! %Project{code: "BBB", description: "Project BBB description", account: account_b, phase: followup, tags: [consulting_tag, training_tag] }
Repo.insert! %Project{code: "CCC", description: "Project CCC description", account: account_b, phase: implementation }

casual_tag = Repo.insert! %DealTag{description: "show-me-the-money", color: "blue"}
job_tag = Repo.insert! %DealTag{description: "job", color: "black"}
gordon_gekko_tag = Repo.insert! %DealTag{description: "gordon-gekko", color: "green"}

Repo.insert! %Deal{description: Enum.random(paragraph), account: account_a, owner: robert, tags: [casual_tag], probability: 100 }
Repo.insert! %Deal{description: Enum.random(paragraph), account: account_a, owner: joe, tags: [job_tag], probability: 80, expected_value: 100, closing_date: Ecto.Date.from_erl(today), closed_value: 40_000}
Repo.insert! %Deal{description: Enum.random(paragraph), account: account_a, owner: mike, tags: [gordon_gekko_tag], probability: 80, expected_value: 1_000_00 }

#
# Timesheets
#

rejected_status = Repo.insert! %TimesheetStatus{key: "Rejected", active: true, presentation_order: 0, editable_by_owner?: true, editable_by_manager?: false}
draft_status = Repo.insert! %TimesheetStatus{key: "Draft", active: true, presentation_order: 1, editable_by_owner?: true, editable_by_manager?: false}
candidate_status =Repo.insert! %TimesheetStatus{key: "Candidate", active: true, presentation_order: 2, editable_by_owner?: false, editable_by_manager?: false}
approved_status = Repo.insert! %TimesheetStatus{key: "Approved", active: true, presentation_order: 3, editable_by_owner?: false, editable_by_manager?: false}

timesheet_attachment = Repo.insert! %Attachment{user: joe, name: "loremipsum.txt", description: "Lorem ipsum", mimetype: "text/plain", base64_content: Base.encode64(Enum.join(paragraph, "\n"))}

joes_awesome_timesheet = Repo.insert! %Timesheet{status: draft_status, user: joe, start_date: Ecto.Date.from_erl(today), notes: "My Awesome timesheet"}

Repo.insert! %TimesheetEntryTag{description: "Suspect", color: "red"}
Repo.insert! %TimesheetEntryTag{description: "Not billable, yet", color: "yellow"}

#
# Workflow
#

timesheet_workflow = Repo.insert! %Workflow{name: "Timesheet submission", description: "This is the process for submission of timesheet. This process is for employees only. Consultants should refer to the permit a38."}

contract_workflow = Repo.insert! %Workflow{name: "Contract signature", description: "This process is carefully crafted in order to reduce risk, and increase illusion of control."}

submitted = Repo.insert! %State{name: "Submitted", icon_name: "send", color: "blue", presentation_order_index: 0, workflow: timesheet_workflow}
approved = Repo.insert! %State{name: "Approved", icon_name: "mail forward", color: "green", presentation_order_index: 1, workflow: timesheet_workflow}
rejected = Repo.insert! %State{name: "Rejected", icon_name: "reply", color: "red", presentation_order_index: 2, workflow: timesheet_workflow}

discussion = Repo.insert! %State{name: "Discussion", icon_name: "talk", color: "blue", presentation_order_index: 0, workflow: contract_workflow}
informal_offer = Repo.insert! %State{name: "Informal offer", icon_name: "file text", color: "purple", presentation_order_index: 1, workflow: contract_workflow}
contract_sended = Repo.insert! %State{name: "Contract sened", icon_name: "write", color: "orange", presentation_order_index: 2, workflow: contract_workflow}
contract_signed = Repo.insert! %State{name: "Contract signed", icon_name: "dollar", color: "green", presentation_order_index: 3, workflow: contract_workflow}

main_section = Repo.insert! %Section{name: "Submit", description: "...", workflow: timesheet_workflow}

date_field = Repo.insert! %Field{name: "Accepted on", description: "...", type: "date", section: main_section, presentation_order_index: 0}
comment_field = Repo.insert! %Field{name: "Comments", description: "...", type: "long_text", section: main_section, presentation_order_index: 1}
reference_field = Repo.insert! %Field{name: "timesheet", description: "...", type: "reference", entity_reference_name: "Carbon.Timesheet", section: main_section, presentation_order_index: 2}
user_reference_field = Repo.insert! %Field{name: "Owner", description: "...", type: "reference", entity_reference_name: "Carbon.User", section: main_section, presentation_order_index: 3}
account_reference_field = Repo.insert! %Field{name: "Account", description: "...", type: "reference", entity_reference_name: "Carbon.Account", section: main_section, presentation_order_index: 4}

timesheet_workflow_instance = Repo.insert! %Instance{workflow: timesheet_workflow, state: submitted}

date_field_value = Repo.insert! %Value{instance: timesheet_workflow_instance, field: date_field, date_value: Ecto.Date.from_erl(today)}
comment_field_value = Repo.insert! %Value{instance: timesheet_workflow_instance, field: comment_field, string_value: "..."}
reference_field_value = Repo.insert! %Value{instance: timesheet_workflow_instance, field: reference_field, integer_value: joes_awesome_timesheet.id}
user_reference_field_value = Repo.insert! %Value{instance: timesheet_workflow_instance, field: user_reference_field, integer_value: joe.id}
account_reference_field_value = Repo.insert! %Value{instance: timesheet_workflow_instance, field: account_reference_field, integer_value: account_a.id}

#
# Triggers
#

Repo.insert! %Carbon.Rule{name: "on timesheet candidate", description: "Trigger new timesheet workflow when a timesheet becomes 'candidate'", action: "update", entity: "timesheet", field: "status_id", value: candidate_status.id, user: joe, workflow: timesheet_workflow}

Repo.insert! %Carbon.Rule{name: "on account customer", description: "...", action: "update", entity: "account", field: "status_id", value: customer_status.id, user: joe, workflow: timesheet_workflow}

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
