import { Injectable } from '@nestjs/common';
import { GrpcClient, RpcClient, Service } from '@nestcloud/grpc';
import { BillingServiceClient } from '@server/proto-schema/billing';
import { SERVICE_LIST } from '../../constants';

@Injectable()
export class BillingsRpcClientService {
    @Service(SERVICE_LIST.billing.service, {
        service: SERVICE_LIST.billing.consulName,
        package: SERVICE_LIST.billing.package,
        protoPath: SERVICE_LIST.billing.protoPath,
    })
    public svc: BillingServiceClient<any>;
    @RpcClient({
        service: SERVICE_LIST.billing.consulName,
        package: SERVICE_LIST.billing.package,
        protoPath: SERVICE_LIST.billing.protoPath,
    })
    private readonly client: GrpcClient;
}
