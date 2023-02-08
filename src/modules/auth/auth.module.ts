import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

//@Global()
@Module({
  imports: [ConfigModule.register({ folder: './config' })],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService]
})
export class AuthModule {}
