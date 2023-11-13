import { Module } from '@nestjs/common';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ProductModelModule } from './product_model/product_model.module';
import { CategoryBrandModule } from './category_brand/category_brand.module';
import { AttributeGroupModule } from './attribute_group/attribute_group.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AttributesModule } from './attributes/attributes.module';
import { ProductInfoModule } from './product_info/product_info.module';
import { ViewsModule } from './views/views.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    CategoryModule,
    BrandModule,
    ProductModelModule,
    CategoryBrandModule,
    AttributeGroupModule,
    AttributesModule,
    ProductInfoModule,
    ViewsModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
