import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ProductModelModule } from './product_model/product_model.module';
import { CategoryBrandModule } from './category_brand/category_brand.module';
import { AttributeGroupModule } from './attribute_group/attribute_group.module';

@Module({
  imports: [CategoryModule, BrandModule, ProductModelModule, CategoryBrandModule, AttributeGroupModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
