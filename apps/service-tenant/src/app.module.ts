import { Module } from '@nestjs/common';
import { MongoModule } from '@juicycleff/repo-orm';
import { CoreModule, ServiceRegistryModule } from '@server/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TenantsModule } from './tenants/tenants.module';
import { MembersModule } from './members/members.module';
import { MongoMultiTenantConfigService } from '@server/core/mutiltenancy';

@Module({
    imports: [
        ServiceRegistryModule,
        CoreModule,
        MongoModule.registerAsync({
            useClass: MongoMultiTenantConfigService,
        }),
        TenantsModule,
        MembersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
