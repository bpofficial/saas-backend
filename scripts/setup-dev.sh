docker-compose --project-directory=. -f docker-compose.dev.yml up -d consul redis mongo eventstore &
nest build api-admin
nest build service-access
nest build service-account
nest build service-billing
nest build service-notification
nest build service-project
nest build service-role
nest build service-tenant
nest build service-webhook
