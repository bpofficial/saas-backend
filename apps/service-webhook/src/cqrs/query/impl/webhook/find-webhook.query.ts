import { IQuery } from '@nestjs/cqrs';
import { FindWebhookRequest } from '@server/proto-schema/webhook';
import { WebhookRepository } from '@server/repository';

export class FindWebhookQuery implements IQuery {
    constructor(
        public readonly input: FindWebhookRequest,
        public readonly repo: WebhookRepository,
    ) {
    }
}
