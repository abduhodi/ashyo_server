import { Module } from '@nestjs/common';
import { AttributeGroupProductModelService } from './attribute-group_product-model.service';
import { AttributeGroupProductModelController } from './attribute-group_product-model.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AttributeGroupProductModelController],
  providers: [AttributeGroupProductModelService],
})
export class AttributeGroupProductModelModule {}
