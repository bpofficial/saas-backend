import { IQuery } from '@nestjs/cqrs';
import { TenantAvailableRequest } from '@server/proto-schema/tenant';

export class TenantAvailableQuery implements IQuery {
    constructor(public readonly where: TenantAvailableRequest) {
    }
}
