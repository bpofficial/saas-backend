import { IQuery } from '@nestjs/cqrs';
import { UserEntity } from '@server/repository';
import { ReadTenantRequest } from '@server/proto-schema/tenant';

export class GetTenantQuery implements IQuery {
    constructor(
        public readonly where: ReadTenantRequest,
        public readonly user?: UserEntity,
        public readonly inApp?: boolean,
    ) {
    }
}
