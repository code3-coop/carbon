cd /home/sshadmin/carbon
_build/prod/rel/carbon/bin/carbon stop
git checkout --force
mix deps.get
carbon/_build/prod/rel/carbon/bin/carbon Elixir.Release.Tasks migrate
MIX_ENV=prod mix release --env=prod
_build/prod/rel/carbon/bin/carbon start
