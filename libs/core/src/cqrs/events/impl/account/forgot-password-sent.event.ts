import { IEvent } from '@nestjs/cqrs';
import { UserEntity } from '@server/repository/entities';

export class ForgotPasswordSentEvent implements IEvent {
  constructor(
    public readonly user: UserEntity & { resetPasswordLink?: string },
  ) {}
}
