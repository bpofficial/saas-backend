import { IEvent } from '@nestjs/cqrs';
import { UserEntity } from '@server/repository';

export class UserUpdatedEvent implements IEvent {
    constructor(public readonly user: UserEntity) {
    }
}
