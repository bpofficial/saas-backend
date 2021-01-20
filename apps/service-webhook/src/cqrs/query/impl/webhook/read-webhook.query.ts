import { IQuery } from '@nestjs/cqrs';
import { ReadWebhookRequest } from '@server/proto-schema/webhook';
import { WebhookRepository } from '@server/repository';

export class ReadWebhookQuery implements IQuery {
    constructor(
        public readonly input: ReadWebhookRequest,
        public readonly repo: WebhookRepository,
    ) {
    }
}
