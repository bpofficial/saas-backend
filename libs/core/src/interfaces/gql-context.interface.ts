import { Request as ExpressRequest } from 'express';
import { DataSource } from 'apollo-datasource';
import { PassportContext, PassportSubscriptionContext } from 'graphql-passport';
import { UserEntity } from '@server/repository';
import {
    AccessTokenRpcClientService,
    AccountsRpcClientService,
    BillingsRpcClientService,
    RolesRpcClientService,
    TenantsRpcClientService,
    WebhooksRpcClientService,
} from '@server/core/services';
import { Context } from 'apollo-server-core/src/types';
import { TenantInfo } from '@server/core/mutiltenancy';

export interface IRequest extends ExpressRequest {
    tenantInfo?: TenantInfo;
}

export interface GqlContext
    extends Partial<PassportContext<UserEntity, IRequest> & Context> {
    connection?: any;
    rpc: {
        account: AccountsRpcClientService;
        tenant: TenantsRpcClientService;
        accessToken: AccessTokenRpcClientService;
        role: RolesRpcClientService;
        billing: BillingsRpcClientService;
        webhook: WebhooksRpcClientService;
    };
}

export interface GqlSubscriptionContext
    extends PassportSubscriptionContext<UserEntity, ExpressRequest>,
        DataSource {
}
