import { IQuery } from '@nestjs/cqrs';
import { FindPlansRequest } from '@server/proto-schema/billing';

export class GetPlansQuery implements IQuery {
    constructor(public readonly where?: FindPlansRequest) {
    }
}
