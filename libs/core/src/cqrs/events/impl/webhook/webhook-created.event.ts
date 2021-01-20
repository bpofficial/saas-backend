import { IEvent } from '@nestjs/cqrs';
import { WebhookEntity } from '@server/repository';

export class WebhookCreatedEvent implements IEvent {
  constructor(public readonly webhook: WebhookEntity) {}
}
