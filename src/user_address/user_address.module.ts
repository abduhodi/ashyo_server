import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { User_addressController } from './user_address.controller';
import { User_addressService } from './user_address.service';

@Module({
  imports: [PrismaModule],
  controllers: [User_addressController],
  providers: [User_addressService],
  exports: [User_addressService],
})
export class User_addressModule {}
