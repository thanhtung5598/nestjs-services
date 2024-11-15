import { Module } from '@nestjs/common';
import { SharedModule } from './libs/shared/shared.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [SharedModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
