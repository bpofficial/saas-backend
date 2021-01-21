import { IEvent } from '@nestjs/cqrs';
import { UserEntity } from '@server/repository/entities';

export class VerificationEmailSentEvent implements IEvent {
    constructor(public readonly user: UserEntity & { activationLink?: string }) {
    }
}
