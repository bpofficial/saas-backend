import { IQuery } from '@nestjs/cqrs';
import { ReadMemberRequest } from '@server/proto-schema/tenant';

export class GetMemberQuery implements IQuery {
    constructor(
        public readonly where: ReadMemberRequest,
        public readonly tenantId: string,
    ) {
    }
}
