import { ICommand } from '@nestjs/cqrs';
import { UserEntity } from '@server/repository';
import { DeleteMemberRequest } from '@server/proto-schema/tenant';

export class RemoveMemberCommand implements ICommand {
    constructor(
        public readonly input: DeleteMemberRequest,
        public readonly tenantId: string,
        public readonly user: UserEntity,
    ) {
    }
}
