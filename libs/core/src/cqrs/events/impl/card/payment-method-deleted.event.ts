import { IEvent } from '@nestjs/cqrs';
import { CardEntity } from '@server/repository';

export class PaymentMethodDeletedEvent implements IEvent {
  constructor(public readonly card: CardEntity) {}
}
