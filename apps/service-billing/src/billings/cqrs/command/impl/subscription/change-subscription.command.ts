import { ICommand } from '@nestjs/cqrs';
import { ChangeSubscriptionRequest } from '@server/proto-schema/billing';

export class ChangeSubscriptionCommand implements ICommand {
    constructor(public readonly input: ChangeSubscriptionRequest) {
    }
}
