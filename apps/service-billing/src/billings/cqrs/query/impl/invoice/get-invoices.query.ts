import { IQuery } from '@nestjs/cqrs';
import { FindInvoicesRequest } from '@server/proto-schema/billing';

export class GetInvoicesQuery implements IQuery {
    constructor(
        public readonly input: FindInvoicesRequest,
        public readonly customerId: string,
    ) {
    }
}
