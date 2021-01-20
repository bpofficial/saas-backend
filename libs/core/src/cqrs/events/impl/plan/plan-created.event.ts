import { IEvent } from '@nestjs/cqrs';
import { PlanEntity } from '@server/repository';

export class PlanCreatedEvent implements IEvent {
  constructor(public readonly plan: PlanEntity) {}
}
