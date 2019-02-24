#!/usr/bin/env bash
BASEDIR=$(dirname "$0")
cd "$BASEDIR"
git reset --hard
git pull
failingcommand || exit "$?"
npm install
ng build --prod
rm -rf /var/www/admin/html/*
cp -a -f dist/icms-admin/. /var/www/admin/html/
