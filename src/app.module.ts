import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { BrandModule } from './brand/brand.module';
import { ProductModelModule } from './product_model/product_model.module';
import { CategoryBrandModule } from './category_brand/category_brand.module';
import { AttributesModule } from './attributes/attributes.module';
import { ProductInfoModule } from './product_info/product_info.module';
import { SaleModule } from './sale/sale.module';
import { SaleModelModule } from './sale_model/sale_model.module';
import { ViewsModule } from './views/views.module';
import { PaymentModule } from './payment/payment.module';
import { CommentModule } from './comment/comment.module';
import { User_addressModule } from './user_address/user_address.module';
import { OrderModule } from './order/order.module';
import { Order_itemsModule } from './order_items/order_items.module';
import { SaleModule } from './sale/sale.module';
import { SaleModelModule } from './sale_model/sale_model.module';
import { ProductModule } from './product/product.module';
import { Product_mediaModule } from './product_media/product_media.module';
import { Cart_itemsModule } from './cart_items/cart_items.module';
import { PositionModule } from './position/position.module';
import { RatingModule } from './rating/rating.module';
import { AddressModule } from './address/address.module';
import { DistrictModule } from './district/district.module';
import { AttributeGroupModule } from './attribute_group/attribute_group.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client')
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
    ViewsModule,
    PaymentModule,
    CommentModule,
    User_addressModule,
    OrderModule,
    Order_itemsModule,
    ProductModule,
    Product_mediaModule,
    Cart_itemsModule,
    AddressModule,
    DistrictModule,
    PositionModule,
    RatingModule,
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
