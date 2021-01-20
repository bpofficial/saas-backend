import { Module } from '@nestjs/common';
import { TenantRepository } from '@server/repository';
import { CookieSerializer } from '@server/common';
import { MemberCommandHandlers, MemberQueryHandlers } from './cqrs';
import { JwtConfigService, MemberEventHandlers, RolesRpcClientService } from '@server/core';
import { JwtModule } from '@nestjs/jwt';
import { MembersController } from './members.controller';

@Module({
    imports: [
        JwtModule.registerAsync({
            useClass: JwtConfigService,
        }),
    ],
    providers: [
        TenantRepository,
        RolesRpcClientService,
        CookieSerializer,
        ...MemberCommandHandlers,
        ...MemberEventHandlers,
        ...MemberQueryHandlers,
    ],
    controllers: [MembersController],
})
export class MembersModule {
}
