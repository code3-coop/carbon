# Carbon: Hackable white label CRM

## Rational

Over the years, we have built multiple applications. We noticed at least 3 kinds
of applications. One of them is a CRM. We've built a couple of applications that
are CRM-like at the core. Of course since this is based on consultancy work, the
apps are very much tied to needs of the client.

We are tired of building more or less the same app over and over again. So we
are building Carbon. We want to use it to kickstart projects that need these
kind of features.

We want to build a solid base that can be enriched for each new client and where
everyone can benefit from the progress of all.

For this project we have particular goals:

* _Sane and simple default data model_. The default should not create thousands
of tables and thousands of views. Only the basics and then DIY. We'll provide
guidline on how to add new fields to enrich your model.
* _Hackable_ We want to be able to change the stuff that matters without behing
experts.
* _Reasonably scalable_ We don't aim at building a facebook sized CRM. Still we
don't want to find out that we can only handle 50 concurrent users.
* _Customizable at runtime_ we want to allow the user the add new fields if they
need to.


## What we want to solve

We want to be able to keep tracks of relations in the long term with the
clients. We want to follow what happens with each deal individually. We want to
be able to share an address book through the app. The app should help us mere
mortals to remember important events in our relationships with our clients and
send us notifications if required.

## What we don't want to solve

We don't want to add find-grained, business-specific, details.

## Who is the target audience for this project

## Running

To start your Carbon:

* Install Elixir with `brew install elixir`
* Install Node with `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash`
* Install node dependency `npm install`
* Install dependencies with `mix deps.get`
* Create and migrate your database with `mix ecto.setup`
* Start Phoenix endpoint with `mix phoenix.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

## Run the tests

    mix test

## Run all db migration in the prod env

rel/my_app/bin/my_app command Elixir.Release.Tasks migrate
