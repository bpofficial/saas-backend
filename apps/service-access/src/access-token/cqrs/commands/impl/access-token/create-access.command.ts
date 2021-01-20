import { ICommand } from '@nestjs/cqrs';
import { CreateAccessRequest } from '@server/proto-schema/access';
import { UserEntity } from '@server/repository';

export class CreateAccessCommand implements ICommand {
    constructor(
        public readonly cmd: CreateAccessRequest,
        public readonly user: UserEntity,
    ) {
    }
}
