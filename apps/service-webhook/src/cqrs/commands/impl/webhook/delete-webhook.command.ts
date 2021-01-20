import { ICommand } from '@nestjs/cqrs';
import { DeleteWebhookRequest } from '@server/proto-schema/webhook';
import { WebhookRepository } from '@server/repository';

export class DeleteWebhookCommand implements ICommand {
    constructor(
        public readonly cmd: DeleteWebhookRequest,
        public readonly repo: WebhookRepository,
    ) {
    }
}
