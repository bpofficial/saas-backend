import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule, ServiceRegistryModule } from '@server/core';
import { MongoModule } from '@juicycleff/repo-orm';
import { WebhookModule } from './webhook/webhook.module';
import { MongoMultiTenantConfigService } from '@server/core/mutiltenancy';

@Module({
    imports: [
        ServiceRegistryModule,
        CoreModule,
        MongoModule.registerAsync({
            useClass: MongoMultiTenantConfigService,
        }),
        WebhookModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
