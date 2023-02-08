import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthMiddleware } from 'src/middlewares/auth/auth.middleware';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

//@Global()
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer ) {
    consumer
    .apply(AuthMiddleware)
    .forRoutes({path:'auth/findall', method: RequestMethod.GET})
  }
}
