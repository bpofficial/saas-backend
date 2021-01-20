#!/bin/sh

node ./dist/apps/service-access/main.js >./logs/service-access.log &
node ./dist/apps/service-account/main.js >./logs/service-account.log &
node ./dist/apps/service-billing/main.js >./logs/service-billing.log &
node ./dist/apps/service-notification/main.js >./logs/service-notification.log &
node ./dist/apps/service-project/main.js >./logs/service-project.log &
node ./dist/apps/service-role/main.js >./logs/service-role.log &
node ./dist/apps/service-tenant/main.js >./logs/service-tenant.log &
node ./dist/apps/service-webhook/main.js >./logs/service-webhook.log &
yarn start:dev api-admin
