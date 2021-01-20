import { Module } from '@nestjs/common';
import { ProjectRepository } from '@server/repository';
import { EventStoreModule, EventStoreSubscriptionType } from '@juicycleff/nestjs-event-store';
import { ProjectCommandHandlers, ProjectQueryHandlers } from './cqrs';
import { ProjectsController } from './projects.controller';

@Module({
    imports: [
        EventStoreModule.registerFeature({
            type: 'event-store',
            featureStreamName: '$ce-project',
            subscriptions: [
                {
                    type: EventStoreSubscriptionType.Volatile,
                    stream: '$ce-project',
                },
            ],
            eventHandlers: null,
        }),
    ],
    providers: [
        ...ProjectQueryHandlers,
        ...ProjectCommandHandlers,
        ProjectRepository,
    ],
    controllers: [ProjectsController],
})
export class ProjectsModule {
}
