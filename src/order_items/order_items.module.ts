import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { Order_itemsController } from './order_items.controller';
import { Order_itemsService } from './order_items.service';

@Module({
  imports: [PrismaModule],
  controllers: [Order_itemsController],
  providers: [Order_itemsService],
  exports: [Order_itemsService],
})
export class Order_itemsModule {}
