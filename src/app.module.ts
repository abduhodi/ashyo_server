import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ProductModelModule } from './product_model/product_model.module';
import { CategoryBrandModule } from './category_brand/category_brand.module';

@Module({
  imports: [CategoryModule, BrandModule, ProductModelModule, CategoryBrandModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
