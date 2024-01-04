#!/bin/bash

rm -rf ./.amplify-hosting

mkdir -p ./.amplify-hosting/compute
sed 's|/static/images|/.amplify-hosting/static/images|' -i dist/index.js 

cp -r ./dist ./.amplify-hosting/compute/default
cp -r ./node_modules ./.amplify-hosting/compute/default/node_modules

cp -r static ./.amplify-hosting/static

cp deploy-manifest.json ./.amplify-hosting/deploy-manifest.json