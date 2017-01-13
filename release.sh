echo Running release

cd /home/sshadmin/carbon
GIT_DIR=/home/sshadmin/carbon/.git

echo Stopping current instance
_build/prod/rel/carbon/bin/carbon stop

echo Pulling last changes
git --work-tree=${pwd} checkout --force

echo Updating dependcies
mix deps.get

echo Running migrations
_build/prod/rel/carbon/bin/carbon command Carbon.Release.Tasks migrate

echo Building release
MIX_ENV=prod mix release --env=prod

echo Starting app
_build/prod/rel/carbon/bin/carbon start
