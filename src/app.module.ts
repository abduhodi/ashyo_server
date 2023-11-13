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
import { CommentModule } from './comment/comment.module';
import { User_addressModule } from './user_address/user_address.module';
import { OrderModule } from './order/order.module';
import { Order_itemsModule } from './order_items/order_items.module';
import { SaleModule } from './sale/sale.module';
import { SaleModelModule } from './sale_model/sale_model.module';
import { ProductModule } from './product/product.module';
import { Product_mediaModule } from './product_media/product_media.module';
import { Cart_itemsModule } from './cart_items/cart_items.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    CategoryModule,
    BrandModule,
    ProductModelModule,
    CategoryBrandModule,
    SaleModule,
    SaleModelModule,
    AttributeGroupModule,
    AttributesModule,
    ProductInfoModule,
    CommentModule,
    User_addressModule,
    OrderModule,
    Order_itemsModule,
    ProductModule,
    Product_mediaModule,
    Cart_itemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
