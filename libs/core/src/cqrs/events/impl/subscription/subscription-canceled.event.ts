import { IEvent } from '@nestjs/cqrs';
import { subscriptions } from 'stripe';

export class SubscriptionCanceledEvent implements IEvent {
    constructor(public readonly subscription: subscriptions.ISubscription) {
    }
}
