import { Module } from '@nestjs/common';
import { UserRepository } from '@server/repository';
import { EventStoreModule, EventStoreSubscriptionType } from '@juicycleff/nestjs-event-store';
import {
    AccountEventHandlers,
    BillingEventHandlers,
    BillingsRpcClientService,
    EmailVerifiedEvent,
    JwtConfigService,
    RolesRpcClientService,
    StripeUserCreatedEvent,
    UserLoggedInEvent,
    UserRegisteredEvent,
} from '@server/core';
import { AccountsController } from './accounts.controller';
import { AccountSagas } from './sagas';
import { AccountCommandHandlers, AccountQueryHandlers } from './cqrs';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        JwtModule.registerAsync({
            useClass: JwtConfigService,
        }),
        EventStoreModule.registerFeature({
            type: 'event-store',
            featureStreamName: '$ce-account',
            subscriptions: [
                {
                    type: EventStoreSubscriptionType.Volatile,
                    stream: '$ce-account',
                },
                {
                    type: EventStoreSubscriptionType.Volatile,
                    stream: '$ce-billing',
                },
            ],
            eventHandlers: {
                UserLoggedInEvent: (data) => new UserLoggedInEvent(data),
                UserRegisteredEvent: (data) => new UserRegisteredEvent(data),
                EmailVerifiedEvent: (data) => new EmailVerifiedEvent(data),
                StripeUserCreatedEvent: (data) => new StripeUserCreatedEvent(data),
            },
        }),
    ],
    providers: [
        AccountSagas,
        UserRepository,
        RolesRpcClientService,
        BillingsRpcClientService,
        ...AccountQueryHandlers,
        ...AccountEventHandlers,
        ...BillingEventHandlers,
        ...AccountCommandHandlers,
    ],
    controllers: [AccountsController],
})
export class AccountsModule {
}
