import { Module } from '@nestjs/common';
import { ViewsService } from './views.service';
import { ViewsController } from './views.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ViewsController],
  providers: [ViewsService],
})
export class ViewsModule {}
