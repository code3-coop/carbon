echo Running release

echo Stopping current instance
_build/prod/rel/carbon/bin/carbon stop

echo Updating dependencies
mix deps.get

echo Building release
MIX_ENV=prod mix release --env=prod

echo Running migrations
_build/prod/rel/carbon/bin/carbon command Elixir.Carbon.Release.Tasks migrate

echo Starting app
_build/prod/rel/carbon/bin/carbon start
