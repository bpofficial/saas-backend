const baseUrl = process.cwd() + '/libs/proto-schema/src/';

export const SERVICE_LIST = {
    role: {
        package: 'server.svc.role',
        consulName: 'server.svc.role',
        service: 'RoleService',
        protoPath: baseUrl + 'proto/role.proto',
    },
    access: {
        package: 'server.svc.access',
        consulName: 'server.svc.access',
        service: 'AccessService',
        protoPath: baseUrl + 'proto/access.proto',
    },
    webhook: {
        package: 'server.svc.webhook',
        consulName: 'server.svc.webhook',
        service: 'WebhookService',
        protoPath: baseUrl + 'proto/webhook.proto',
    },
    billing: {
        package: 'server.svc.billing',
        consulName: 'server.svc.billing',
        service: 'BillingService',
        protoPath: baseUrl + 'proto/billing.proto',
    },
    tenant: {
        package: 'server.svc.tenant',
        consulName: 'server.svc.tenant',
        service: 'TenantService',
        protoPath: baseUrl + 'proto/tenant.proto',
    },
    account: {
        package: 'server.svc.account',
        consulName: 'server.svc.account',
        service: 'AccountService',
        protoPath: baseUrl + 'proto/account.proto',
    },
    project: {
        package: 'server.svc.project',
        consulName: 'server.svc.project',
        service: 'ProjectService',
        protoPath: baseUrl + 'proto/project.proto',
    },
    admin: {
        consulName: 'server.api.admin',
    },
};
