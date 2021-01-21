import { Injectable } from '@nestjs/common';
import { GrpcClient, RpcClient, Service } from '@nestcloud/grpc';
import { ProjectServiceClient } from '@server/proto-schema/project';
import { SERVICE_LIST } from '../../constants';

@Injectable()
export class ProjectsRpcClientService {
    @Service(SERVICE_LIST.project.service, {
        service: SERVICE_LIST.project.consulName,
        package: SERVICE_LIST.project.package,
        protoPath: SERVICE_LIST.project.protoPath,
    })
    public svc: ProjectServiceClient<any>;
    @RpcClient({
        service: SERVICE_LIST.project.consulName,
        package: SERVICE_LIST.project.package,
        protoPath: SERVICE_LIST.project.protoPath,
    })
    private readonly client: GrpcClient;
}
