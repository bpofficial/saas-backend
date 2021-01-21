import { IEvent } from '@nestjs/cqrs';
import { WebhookEntity } from '@server/repository';

export class WebhookUpdatedEvent implements IEvent {
    constructor(public readonly webhook: WebhookEntity) {
    }
}
