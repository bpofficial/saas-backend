import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestCloud } from '@nestcloud/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { microserviceSetup } from '@server/core';

async function bootStrap() {
    const app = NestCloud.create(
        await NestFactory.create<NestFastifyApplication>(
            AppModule,
            new FastifyAdapter(),
        ),
    );
    await microserviceSetup(app, 'proto/access.proto', {
        enableNats: false,
        enableMqtt: false,
    });
}

bootStrap().then();
