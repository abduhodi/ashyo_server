import { Module } from '@nestjs/common';
import { AttributeGroupService } from './attribute_group.service';
import { AttributeGroupController } from './attribute_group.controller';

@Module({
  controllers: [AttributeGroupController],
  providers: [AttributeGroupService],
})
export class AttributeGroupModule {}
