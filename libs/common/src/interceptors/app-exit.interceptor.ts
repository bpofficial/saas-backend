import { CallHandler, ExecutionContext, HttpException, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { ApolloError } from 'apollo-server-express';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ExitInterceptor implements NestInterceptor {
    public intercept(
        context: ExecutionContext,
        next: CallHandler<any>,
    ): Observable<any> {
        return next
        .handle()
        .pipe(
            catchError((e) => {
                if (e instanceof HttpException) {
                    return throwError(e);
                } else {
                    return throwError(
                        new ApolloError('Internal Error', 'INTERNAL_ERROR'),
                    );
                }
            }),
        )
        .pipe(
            map((data) => {
                return { data };
            }),
        );
    }
}
