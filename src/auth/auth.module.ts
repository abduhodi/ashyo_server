import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { SMSApiModule } from '../smsApi/smsApi.module';
import { Cart_itemsModule } from '../cart_items/cart_items.module';
import { ViewsModule } from '../views/views.module';

@Module({
  imports: [PrismaModule, SMSApiModule, Cart_itemsModule, ViewsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
