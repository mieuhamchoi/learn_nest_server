
import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from 'src/middlewares/auth/auth.middleware';
import { APP_GUARD } from '@nestjs/core';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth/auth.guard';

//@Global()
@Module({
  controllers: [AuthController],
  providers: [
  // {
  //   provide: APP_GUARD,
  //   useClass: AuthGuard,
  // },
  AuthService
],
  exports: [AuthService]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer ) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes({path:'auth/findall', method: RequestMethod.GET})
  }
}
