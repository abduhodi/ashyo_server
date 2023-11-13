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
import { SaleModule } from './sale/sale.module';
import { SaleModelModule } from './sale_model/sale_model.module';
import { ViewsModule } from './views/views.module';
import { PaymentModule } from './payment/payment.module';
import { CommentModule } from './comment/comment.module';
import { User_addressModule } from './user_address/user_address.module';
import { OrderModule } from './order/order.module';
import { Order_itemsModule } from './order_items/order_items.module';

import { AttributeGroupModule } from './attribute_group/attribute_group.module';
import { AttributesModule } from './attributes/attributes.module';
import { ProductInfoModule } from './product_info/product_info.module';

import { PositionModule } from './no-spec/position/position.module';
import { PositionModule } from './position/position.module';
import { AddressModule } from './address/address.module';
import { DistrictModule } from './district/district.module';

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
    ViewsModule,
    PaymentModule,
    CommentModule,
    User_addressModule,
    OrderModule,
    Order_itemsModule,

    PositionModule,
    AddressModule,
    DistrictModule



    PositionModule


  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
