#!/bin/sh
set -e

export LANG="zh_CN.UTF-8"

echo "##############################################################################"
echo "Container start , Pull the latest code..."
echo "容器启动，git 拉取最新代码..."
git remote set-url origin https://github.com/gcdd1993/jd_scripts
git branch --set-upstream-to=origin/master master
git reset --hard
git -C /scripts pull
npm install --prefix /scripts
echo "##############################################################################"

node /scripts/jd_crazy.js
