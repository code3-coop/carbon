# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :carbon,
  ecto_repos: [Carbon.Repo]

# Configures the endpoint
config :carbon, Carbon.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "u/SYPEI6LdXu/69/HCC+y9CRZ7byzOkQcbOJwkLEPRsTRnN5Dxc3xldEz3DzkJ+K",
  render_errors: [view: Carbon.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Carbon.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

config :number, currency: [
                  unit: "$",
                  precision: 2,
                  delimiter: "\u00A0",
                  separator: ",",
                  format: "%n\%u",           # "30.00 $"
                  negative_format: "-\u00A0%n\u00A0%u"   # "- 30.00 $"
                ],
                delimit: [
                  precision: 2,
                  delimiter: " ",
                  separator: ","
                ]
# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
