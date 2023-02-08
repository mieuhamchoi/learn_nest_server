import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth/auth.guard';

//@Global()
@Module({
  controllers: [AuthController],
  providers: [{
    provide: APP_GUARD,
    useClass: AuthGuard,
  },AuthService],
  exports: [AuthService]
})
export class AuthModule {}
