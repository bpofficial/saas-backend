import { IEvent } from '@nestjs/cqrs';
import { TenantMemberEmbed } from '@server/repository';

export class MemberInvitedEvent implements IEvent {
  constructor(public readonly member: TenantMemberEmbed & { token?: string }) {}
}
