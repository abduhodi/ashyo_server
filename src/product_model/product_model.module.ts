import { Module } from '@nestjs/common';
import { ProductModelService } from './product_model.service';
import { ProductModelController } from './product_model.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductModelController],
  providers: [ProductModelService],
  exports: [ProductModelService],
})
export class ProductModelModule {}
