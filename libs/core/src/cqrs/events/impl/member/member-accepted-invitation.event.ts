import { IEvent } from '@nestjs/cqrs';
import { TenantMemberEmbed } from '@server/repository';

export class MemberAcceptedInvitationEvent implements IEvent {
    constructor(public readonly member: TenantMemberEmbed) {
    }
}
