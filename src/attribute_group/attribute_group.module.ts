import { Module } from '@nestjs/common';
import { AttributeGroupService } from './attribute_group.service';
import { AttributeGroupController } from './attribute_group.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AttributeGroupController],
  providers: [AttributeGroupService],
})
export class AttributeGroupModule {}
