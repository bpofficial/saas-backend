import { ICommand } from '@nestjs/cqrs';
import { UserEntity } from '@server/repository';
import { DeleteTenantRequest } from '@server/proto-schema/tenant';

export class RemoveTenantCommand implements ICommand {
    constructor(
        public readonly input: DeleteTenantRequest,
        public readonly user: UserEntity,
    ) {
    }
}
