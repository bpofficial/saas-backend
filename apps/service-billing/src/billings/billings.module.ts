import { Module } from '@nestjs/common';
import { BillingsController } from './billings.controller';
import { CardsModule } from '../cards/cards.module';
import { EventStoreModule, EventStoreSubscriptionType } from '@juicycleff/nestjs-event-store';
import { PlansModule } from '../plans/plans.module';
import {
    CustomerCommandHandlers,
    InvoiceQueryHandlers,
    PlanCommandHandlers,
    PlanQueryHandlers,
    SubscriptionCommandHandlers,
    SubscriptionQueryHandlers,
} from './cqrs';
import { PlanRepository } from '@server/repository';
import { StripeUserCreatedEvent } from '@server/core';

@Module({
    imports: [
        EventStoreModule.registerFeature({
            type: 'event-store',
            featureStreamName: '$ce-billing',
            subscriptions: [
                {
                    type: EventStoreSubscriptionType.Volatile,
                    stream: '$ce-billing',
                },
            ],
            eventHandlers: {
                StripeUserCreatedEvent: data => new StripeUserCreatedEvent(data),
            },
        }),
        CardsModule,
        PlansModule,
    ],
    controllers: [BillingsController],
    providers: [
        PlanRepository,
        ...CustomerCommandHandlers,
        ...SubscriptionCommandHandlers,
        ...SubscriptionQueryHandlers,
        ...PlanCommandHandlers,
        ...PlanQueryHandlers,
        ...InvoiceQueryHandlers,
    ],
})
export class BillingsModule {
}
