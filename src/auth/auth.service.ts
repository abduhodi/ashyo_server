import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from '../prisma/prisma.service';
import { LoginAuthDto } from './dto/login.auth';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { SignupAuthDto } from './dto/signup.auth';
import { ROLE } from '../enums/roles.enum';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async signupUser(signupDto: SignupAuthDto) {
    try {
      const { phone, password, confirm_password } = signupDto;
      if (password !== confirm_password) {
        throw new BadRequestException('Confiem password is not matched');
      }
      const exist = await this.prisma.user.findFirst({ where: { phone } });
      if (exist) {
        throw new BadRequestException(
          'Phone number is already registered by another User',
        );
      }
      const hashed_password = await bcrypt.hash(password, 7);
      const user = await this.prisma.user.create({
        data: { phone, password: hashed_password, role: ROLE.USER },
        select: { id: true, first_name: true, last_name: true, phone: true },
      });
      return user;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async login(loginDto: LoginAuthDto) {
    try {
      const user = await this.prisma.user.findFirst({
        where: { phone: loginDto.phone },
      });
      if (!user) {
        throw new UnauthorizedException('username or password is incorrect');
      }
      const correct = await bcrypt.compare(loginDto.password, user.password);
      if (!correct) {
        throw new UnauthorizedException('username or password is incorrect');
      }
      const tokens = await this.generateToken(user.id);
      const hashed_token = await bcrypt.hash(tokens.refresh_token, 7);
      const update = await this.prisma.user.update({
        where: { id: user.id },
        data: { token: hashed_token },
        select: { id: true, first_name: true, last_name: true, phone: true },
      });
      return update;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async logout(req: any, res: Response) {
    try {
      const id = req?.user?.id;
      const user = await this.prisma.user.findFirst({
        where: { id },
      });
      if (!user) {
        res.clearCookie('token');
        throw new UnauthorizedException('invalid token');
      }
      res.clearCookie('token');
      await this.prisma.user.update({ where: { id }, data: { token: '' } });
      return { message: 'logout success' };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async generateToken(id: number) {
    try {
      const access_token = await this.jwtService.signAsync(
        { id },
        { expiresIn: process.env.ACCESS_TIME, secret: process.env.ACCESS_KEY },
      );
      const refresh_token = await this.jwtService.signAsync(
        { id },
        {
          expiresIn: process.env.REFRESH_TIME,
          secret: process.env.REFRESH_KEY,
        },
      );
      return { access_token, refresh_token };
    } catch (error) {
      return null;
    }
  }
}
