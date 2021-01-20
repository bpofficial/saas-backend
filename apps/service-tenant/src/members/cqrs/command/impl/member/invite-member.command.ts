import { ICommand } from '@nestjs/cqrs';
import { UserEntity } from '@server/repository';
import { InviteMemberRequest } from '@server/proto-schema/tenant';

export class InviteMemberCommand implements ICommand {
    constructor(
        public readonly input: InviteMemberRequest,
        public readonly user: UserEntity,
        public readonly tenantId: string,
    ) {
    }
}
