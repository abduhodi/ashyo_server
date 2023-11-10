import { Module } from '@nestjs/common';
import { CategoryBrandService } from './category_brand.service';
import { CategoryBrandController } from './category_brand.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CategoryBrandController],
  providers: [CategoryBrandService],
  exports: [CategoryBrandService],
})
export class CategoryBrandModule {}
