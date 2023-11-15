import { Module } from '@nestjs/common';
import { SMSApiService } from './smsApi.service';

@Module({
  imports: [],
  controllers: [],
  providers: [SMSApiService],
  exports: [SMSApiService],
})
export class SMSApiModule {}
