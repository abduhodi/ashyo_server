import { Module } from '@nestjs/common';
import { AttributeGroupCategoryService } from './attribute-group_category.service';
import { AttributeGroupCategoryController } from './attribute-group_category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AttributeGroupCategoryController],
  providers: [AttributeGroupCategoryService],
})
export class AttributeGroupCategoryModule {}
