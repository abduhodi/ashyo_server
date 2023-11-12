import { Module } from '@nestjs/common';
import { SaleModelService } from './sale_model.service';
import { SaleModelController } from './sale_model.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SaleModelController],
  providers: [SaleModelService],
  exports: [SaleModelService],
})
export class SaleModelModule {}
