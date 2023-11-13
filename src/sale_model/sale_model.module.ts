import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { SaleModelController } from './sale_model.controller';
import { SaleModelService } from './sale_model.service';

@Module({
  imports: [PrismaModule],
  controllers: [SaleModelController],
  providers: [SaleModelService],
  exports: [SaleModelService],
})
export class SaleModelModule {}
