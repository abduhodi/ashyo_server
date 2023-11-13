import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { Product_mediaController } from './product_media.controller';
import { Product_mediaService } from './product_media.service';

@Module({
  imports: [PrismaModule],
  controllers: [Product_mediaController],
  providers: [Product_mediaService],
  exports: [Product_mediaService],
})
export class Product_mediaModule {}
