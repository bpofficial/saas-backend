import { Injectable, Logger } from '@nestjs/common';
import { ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { TenantCreatedEvent } from '@server/core/cqrs';

@Injectable()
export class TenantSagas {
    @Saga()
    tenantCreated = (events$: Observable<any>): Observable<void> => {
        return events$.pipe(
            ofType(TenantCreatedEvent),
            delay(500),
            map((event) => {
                Logger.log('Inside [TenantSagas] Saga', JSON.stringify(event.tenant));
                return null;
            }),
        );
    };
}
