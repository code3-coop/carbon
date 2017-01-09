_build/prod/rel/carbon/bin/carbon stop
mix deps.get
# rel/my_app/bin/carbon Elixir.Release.Tasks migrate
MIX_ENV=prod mix release --env=prod
_build/prod/rel/carbon/bin/carbon start
