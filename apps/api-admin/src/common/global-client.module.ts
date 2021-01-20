import { Global, Module } from '@nestjs/common';
import {
    AccessTokenRpcClientService,
    AccountsRpcClientService,
    BillingsRpcClientService,
    GlobalClientService,
    RolesRpcClientService,
    TenantsRpcClientService,
    WebhooksRpcClientService,
} from '@server/core';

@Global()
@Module({
    providers: [
        RolesRpcClientService,
        AccessTokenRpcClientService,
        TenantsRpcClientService,
        GlobalClientService,
        AccountsRpcClientService,
        BillingsRpcClientService,
        WebhooksRpcClientService,
    ],
    exports: [
        RolesRpcClientService,
        AccessTokenRpcClientService,
        TenantsRpcClientService,
        GlobalClientService,
        AccountsRpcClientService,
        BillingsRpcClientService,
        WebhooksRpcClientService,
    ],
})
export class GlobalClientModule {
}
