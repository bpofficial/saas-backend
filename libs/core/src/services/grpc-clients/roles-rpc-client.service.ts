import { Injectable } from '@nestjs/common';
import { GrpcClient, RpcClient, Service } from '@nestcloud/grpc';
import { RoleServiceClient } from '@server/proto-schema';
import { SERVICE_LIST } from '../../constants';

@Injectable()
export class RolesRpcClientService {
    @Service(SERVICE_LIST.role.service, {
        service: SERVICE_LIST.role.consulName,
        package: SERVICE_LIST.role.package,
        protoPath: SERVICE_LIST.role.protoPath,
    })
    public svc: RoleServiceClient<any>;
    @RpcClient({
        service: SERVICE_LIST.role.consulName,
        package: SERVICE_LIST.role.package,
        protoPath: SERVICE_LIST.role.protoPath,
    })
    private readonly client: GrpcClient;
}
