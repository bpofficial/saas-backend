import { ICommand } from '@nestjs/cqrs';
import * as Account from '@server/proto-schema/account';

export class LoginUserCommand implements ICommand {
    constructor(public readonly cmd: Account.LoginRequest) {
    }
}
