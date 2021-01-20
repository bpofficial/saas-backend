import { IQuery } from '@nestjs/cqrs';
import { HasRightsRequest } from '@server/proto-schema/access';

export class HasRightsQuery implements IQuery {
    constructor(public readonly input: HasRightsRequest) {
    }
}
