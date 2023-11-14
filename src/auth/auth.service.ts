import { Injectable } from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import { LoginAuthDto } from './dto/login.auth';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async loginAdmin(loginDto: LoginAuthDto) {}

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
