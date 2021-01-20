import { ICommand } from '@nestjs/cqrs';
import { UserEntity } from '@server/repository/entities';
import { CreateTenantRequest } from '@server/proto-schema/tenant';

export class CreateTenantCommand implements ICommand {
    constructor(
        public readonly input: CreateTenantRequest,
        public readonly user: UserEntity,
    ) {
    }
}
