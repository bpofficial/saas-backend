import { IEvent } from '@nestjs/cqrs';
import { AccessTokenEntity } from '@server/repository';

export class AccessTokenCreatedEvent implements IEvent {
  constructor(public readonly accessToken: AccessTokenEntity) {}
}
