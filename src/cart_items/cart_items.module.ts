import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { Cart_itemsController } from './cart_items.controller';
import { Cart_itemsService } from './cart_items.service';

@Module({
  imports: [PrismaModule],
  controllers: [Cart_itemsController],
  providers: [Cart_itemsService],
  exports: [Cart_itemsService],
})
export class Cart_itemsModule {}
