#!usr/bin/env sh

set -e
npm run build
cd dist
echo > .nojekyll
echo > 'www.asifekbal.me'  > CNAME
git init
git chechout -B main
git add -A
git commit -m 'deploy'
cd -