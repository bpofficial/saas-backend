import { Injectable } from '@nestjs/common';
import { InjectConfig } from '@nestcloud/config';
import { EtcdConfig } from '@nestcloud/config/etcd-config';
import { MongoModuleOptions, MongoOptionsFactory } from '@juicycleff/repo-orm';
import { ConsulDatabaseConfig } from '@server/common';

const jestMongoDb = global.__MONGO_URI__
    ? `${global.__MONGO_URI__}/${global.__MONGO_DB_NAME__}`
    : undefined;

@Injectable()
export class MongoConfigService implements MongoOptionsFactory {
    constructor(@InjectConfig() private readonly config: EtcdConfig) {
    }

    createMongoOptions(): Promise<MongoModuleOptions> | MongoModuleOptions {
        const database = this.config.get<ConsulDatabaseConfig>('database');
        console.log({
            uri: jestMongoDb || `${database?.mongodb?.uri}${database?.mongodb?.name}?authSource=admin`,
            dbName: global.__MONGO_DB_NAME__ || database?.mongodb?.name,
            clientOptions: database.mongodb.options,
        });
        return {
            uri: jestMongoDb || `${database?.mongodb?.uri}${database?.mongodb?.name}?authSource=admin`,
            dbName: global.__MONGO_DB_NAME__ || database?.mongodb?.name,
            clientOptions: database.mongodb.options,
        };
    }
}
