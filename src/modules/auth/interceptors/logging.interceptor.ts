import { Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException, HttpException, HttpStatus } from '@nestjs/common';
import { Observable, throwError, TimeoutError } from 'rxjs';
import { catchError, tap, timeout } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // console.log('Before...');

    // const now = Date.now();
    // return next
    //   .handle()
    //   .pipe(
    //     tap(() => console.log(`After... ${Date.now() - now}ms`)),
    //   );
    console.log("before...")
    return next.handle().pipe(
        timeout(5000),
        catchError(err => {
            console.log("quá lâu")
        //   if (err instanceof TimeoutError) {
        //     return throwError(() => new RequestTimeoutException());
        //   }
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }),
      );
  }
}