cd /home/sshadmin/carbon
_build/prod/rel/carbon/bin/carbon stop
git checkout --force
mix deps.get
_build/prod/rel/carbon/bin/carbon Release.Tasks migrate
MIX_ENV=prod mix release --env=prod
_build/prod/rel/carbon/bin/carbon start
