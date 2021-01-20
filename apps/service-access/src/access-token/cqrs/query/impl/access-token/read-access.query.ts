import { IQuery } from '@nestjs/cqrs';
import { ReadAccessRequest } from '@server/proto-schema/access';

export class ReadAccessQuery implements IQuery {
    constructor(public readonly input: ReadAccessRequest) {
    }
}
