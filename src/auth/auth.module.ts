import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { SMSApiModule } from '../smsApi/smsApi.module';

@Module({
  imports: [PrismaModule, SMSApiModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
