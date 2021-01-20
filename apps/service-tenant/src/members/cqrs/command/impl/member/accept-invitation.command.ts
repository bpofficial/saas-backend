import { ICommand } from '@nestjs/cqrs';
import { UserEntity } from '@server/repository';
import { AcceptMemberInvitationRequest } from '@server/proto-schema/tenant';

export class AcceptInvitationCommand implements ICommand {
    constructor(
        public readonly input: AcceptMemberInvitationRequest,
        public readonly user: UserEntity,
    ) {
    }
}
