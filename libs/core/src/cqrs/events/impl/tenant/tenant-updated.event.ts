import { IEvent } from '@nestjs/cqrs';
import { TenantEntity } from '@server/repository/entities';

export class TenantUpdatedEvent implements IEvent {
  constructor(public readonly tenant: TenantEntity) {}
}
