import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AddressModule } from './address/address.module';
import { AttributesModule } from './attributes/attributes.module';
import { AttributeGroupModule } from './attribute_group/attribute_group.module';
import { AuthModule } from './auth/auth.module';
import { BrandModule } from './brand/brand.module';
import { Cart_itemsModule } from './cart_items/cart_items.module';
import { CategoryModule } from './category/category.module';
import { CategoryBrandModule } from './category_brand/category_brand.module';
import { CommentModule } from './comment/comment.module';
import { DistrictModule } from './district/district.module';
import { OrderModule } from './order/order.module';
import { Order_itemsModule } from './order_items/order_items.module';
import { PaymentModule } from './payment/payment.module';
import { PositionModule } from './position/position.module';
import { ProductModule } from './product/product.module';
import { ProductInfoModule } from './product_info/product_info.module';
import { Product_mediaModule } from './product_media/product_media.module';
import { ProductModelModule } from './product_model/product_model.module';
import { RatingModule } from './rating/rating.module';
import { SaleModule } from './sale/sale.module';
import { SaleModelModule } from './sale_model/sale_model.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AttributeGroupProductModelModule } from './attribute-group_product-model/attribute-group_product-model.module';
import { AttributeGroupCategoryModule } from './attribute-group_category/attribute-group_category.module';
import { User_addressModule } from './user_address/user_address.module';
import { ViewsModule } from './views/views.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    JwtModule.register({
      global: true,
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
    AuthModule,
    UserModule,
    AttributeGroupProductModelModule,
    AttributeGroupCategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
