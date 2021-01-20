import { ICommand } from '@nestjs/cqrs';
import { UserEntity } from '@server/repository';
import { UpdateTenantRequest } from '@server/proto-schema/tenant';

export class UpdateTenantCommand implements ICommand {
    constructor(
        public readonly input: UpdateTenantRequest,
        public readonly user: UserEntity,
    ) {
    }
}
