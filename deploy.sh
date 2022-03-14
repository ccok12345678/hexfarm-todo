#!/user/bin/env sh

set e

vite build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:ccok12345678/hexfarm-todo.git master:gh-pages

cd -