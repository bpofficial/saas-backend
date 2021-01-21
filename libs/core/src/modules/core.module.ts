import { Global, HttpModule, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppLogger, ValidatorService } from '../services';
import { CookieSerializer } from '@server/common';

const providers = [ValidatorService, AppLogger];

@Global()
@Module({
    imports: [HttpModule, CqrsModule],
    providers: [...providers, CookieSerializer],
    exports: [CqrsModule, ...providers, HttpModule, CookieSerializer],
})
export class CoreModule {
}
