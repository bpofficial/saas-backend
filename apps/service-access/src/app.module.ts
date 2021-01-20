import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule, ServiceRegistryModule } from '@server/core';
import { NestCasbinModule } from 'nestjs-casbin';
import { AccessTokenModule } from './access-token/access-token.module';
import { MongoModule } from '@juicycleff/repo-orm';
import { CasbinUserConfigService } from './casbin-config';
import { AdapterProviderModule } from './adapter.provider';
import { MongoMultiTenantConfigService } from '@server/core/mutiltenancy';

@Module({
    imports: [
        ServiceRegistryModule,
        CoreModule,
        MongoModule.registerAsync({
            useClass: MongoMultiTenantConfigService,
        }),
        NestCasbinModule.registerAsync({
            imports: [AdapterProviderModule],
            useClass: CasbinUserConfigService,
        }),
        AccessTokenModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
