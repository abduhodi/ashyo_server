import { Module } from '@nestjs/common';
import { ViewsService } from './views.service';
import { ViewsController } from './views.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { Cart_itemsModule } from '../cart_items/cart_items.module';

@Module({
  imports: [PrismaModule, Cart_itemsModule],
  controllers: [ViewsController],
  providers: [ViewsService],
  exports: [ViewsService],
})
export class ViewsModule {}
