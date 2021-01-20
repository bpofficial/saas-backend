import { ICommand } from '@nestjs/cqrs';
import { CreateWebhookRequest } from '@server/proto-schema/webhook';
import { UserEntity, WebhookRepository } from '@server/repository';

export class CreateWebhookCommand implements ICommand {
    constructor(
        public readonly cmd: CreateWebhookRequest,
        public readonly repo: WebhookRepository,
        public readonly user?: UserEntity,
    ) {
    }
}
