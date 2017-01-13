echo Running release

cd /home/sshadmin/carbon
GIT_DIR=/home/sshadmin/carbon/.git
echo GIT_DIR $GIT_DIR

_build/prod/rel/carbon/bin/carbon stop
git --work-tree=${pwd} checkout --force
mix deps.get
_build/prod/rel/carbon/bin/carbon command Release.Tasks migrate
MIX_ENV=prod mix release --env=prod
_build/prod/rel/carbon/bin/carbon start
