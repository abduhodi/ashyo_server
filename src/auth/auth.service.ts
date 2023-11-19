import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginAuthDto } from './dto/login.auth';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';
import { SignupAuthDto } from './dto/signup.auth';
import { ROLE } from '../enums/roles.enum';
import { SMSApiService } from '../smsApi/smsApi.service';
import { Cart_itemsService } from '../cart_items/cart_items.service';
import { v4 } from 'uuid';
import { ViewsService } from '../views/views.service';
const otpGenerator = require('otp-generator');
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private smsService: SMSApiService,
    private cartService: Cart_itemsService,
    private viewService: ViewsService,
  ) {}

  async signupUser(signupDto: SignupAuthDto) {
    try {
      const { phone, password, confirm_password } = signupDto;
      if (password !== confirm_password) {
        throw new BadRequestException('Confirm password is not matched');
      }
      const exist = await this.prisma.user.findFirst({ where: { phone } });
      if (exist) {
        throw new BadRequestException(
          'Phone number is already registered by another User',
        );
      }
      const otp = otpGenerator.generate(4, {
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
        digits: true,
      });
      // await this.smsService.sendMessage(phone, otp);
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

  async login(loginDto: LoginAuthDto, req: Request, res: Response) {
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
        select: {
          id: true,
          first_name: true,
          last_name: true,
          phone: true,
        },
      });

      let session_id: string;
      const id = req.cookies['session_id'];
      if (!id) {
        session_id = v4();
        res.cookie('session_id', session_id);
      } else {
        session_id = id;
      }
      await this.cartService.transferCart(String(user.id), session_id);
      await this.viewService.transferCart(String(user.id), session_id);

      return { ...update, token: tokens.access_token };
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
