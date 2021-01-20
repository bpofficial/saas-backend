import { ICommand } from '@nestjs/cqrs';
import { CreateCustomerRequest } from '@server/proto-schema/billing';

export class CreateStripeCustomerCommand implements ICommand {
    constructor(public readonly input: CreateCustomerRequest) {
    }
}
