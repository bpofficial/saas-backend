import { Logger } from '@nestjs/common';
import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { UserRepository } from '@server/repository';
import { UserCreatedEvent } from '@server/core';
import { cleanEmptyProperties } from '@server/common';
import { UpdateUserCommand } from '../../impl';
import * as Account from '@server/proto-schema/account';
import { RpcException } from '@nestjs/microservices';

/**
 * @implements {ICommandHandler<UpdateUserCommand>}
 * @classdesc CQRS command to update user entity
 * @class
 */
@CommandHandler(UpdateUserCommand)
export class UpdateUserHandler implements ICommandHandler<UpdateUserCommand> {
    logger = new Logger(this.constructor.name);

    constructor(
        private readonly userRepository: UserRepository,
        private readonly eventBus: EventBus,
    ) {
    }

    async execute(command: UpdateUserCommand): Promise<Account.UpdateResponse> {
        this.logger.log(`Async ${command.constructor.name}...`);
        const { data, id } = command;

        try {
            const update = cleanEmptyProperties(data);
            const user = await this.userRepository.findOneByIdAndUpdate(id, {
                updates: {
                    $set: { ...update },
                },
            });
            this.eventBus.publish(new UserCreatedEvent(user));
            return {
                // @ts-ignore
                user: user as Account.User,
            };
        } catch (error) {
            this.logger.log(error);
            throw new RpcException(error);
        }
    }
}
