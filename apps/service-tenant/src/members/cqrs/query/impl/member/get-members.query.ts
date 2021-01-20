import { IQuery } from '@nestjs/cqrs';
import { FindMemberRequest } from '@server/proto-schema/tenant';

export class GetMembersQuery implements IQuery {
    constructor(
        public readonly input: FindMemberRequest,
        public readonly tenantId: string,
    ) {
    }
}
