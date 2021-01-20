import { IQuery } from '@nestjs/cqrs';
import { FindTenantRequest } from '@server/proto-schema/tenant';
import { UserEntity } from '@server/repository';

export class GetTenantsQuery implements IQuery {
    constructor(
        public readonly where?: FindTenantRequest,
        public readonly user?: UserEntity,
        public readonly inApp?: boolean,
    ) {
    }
}
