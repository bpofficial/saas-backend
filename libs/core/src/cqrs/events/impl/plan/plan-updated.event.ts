import { IEvent } from '@nestjs/cqrs';
import { PlanEntity } from '@server/repository';

export class PlanUpdatedEvent implements IEvent {
    constructor(public readonly plan: PlanEntity) {
    }
}
