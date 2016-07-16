# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :galaxy,
  ecto_repos: [Galaxy.Repo]

# Configures the endpoint
config :galaxy, Galaxy.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "u/SYPEI6LdXu/69/HCC+y9CRZ7byzOkQcbOJwkLEPRsTRnN5Dxc3xldEz3DzkJ+K",
  render_errors: [view: Galaxy.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Galaxy.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
