#!/usr/bin/env bash
BASEDIR=$(dirname "$0")
cd "$BASEDIR"
git reset --hard || exit "$?"
git pull || exit "$?"
yarn install
ng build --prod
