import { ICommand } from '@nestjs/cqrs';
import { UpdateWebhookRequest } from '@server/proto-schema/webhook';
import { UserEntity, WebhookRepository } from '@server/repository';

export class UpdateWebhookCommand implements ICommand {
    constructor(
        public readonly cmd: UpdateWebhookRequest,
        public readonly repo: WebhookRepository,
        public readonly user?: UserEntity,
    ) {
    }
}
