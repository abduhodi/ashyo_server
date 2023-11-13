import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ProductModelModule } from './product_model/product_model.module';
import { CategoryBrandModule } from './category_brand/category_brand.module';
import { SaleModule } from './sale/sale.module';
import { SaleModelModule } from './sale_model/sale_model.module';
import { AttributeGroupModule } from './attribute_group/attribute_group.module';
import { AttributesModule } from './attributes/attributes.module';
import { ProductInfoModule } from './product_info/product_info.module';


@Module({
  imports: [
    CategoryModule,
    BrandModule,
    ProductModelModule,
    CategoryBrandModule,
    SaleModule,
    SaleModelModule,
    AttributeGroupModule,
    AttributesModule,
    ProductInfoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
