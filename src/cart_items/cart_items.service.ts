import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCart_itemsDto } from './dto/create-cart_items.dto';
import { Cart_items } from '@prisma/client';
import { UpdateCart_itemsDto } from './dto/update-cart_items.dto';
import { Request, Response } from 'express';
import { v4 } from 'uuid';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class Cart_itemsService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async create(
    data: CreateCart_itemsDto,
    req: Request,
    res: Response,
  ): Promise<Cart_items> {
    try {
      const user_id = await this.getId(req, res);
      const product = await this.prisma.product.findFirst({
        where: { id: data.product_id },
      });
      if (!product) {
        throw new BadRequestException('Product id is invalid');
      }
      return this.prisma.cart_items.create({
        data: {
          ...data,
          user_id: user_id,
          subtotal: data.quantity * product.price,
        },
      });
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  async findAll(): Promise<Cart_items[]> {
    return this.prisma.cart_items.findMany({});
  }

  async findOne(id: number): Promise<Cart_items | null> {
    try {
      return this.prisma.cart_items.findUnique({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }

  async update(id: number, data: UpdateCart_itemsDto): Promise<Cart_items> {
    try {
      const cart_items = await this.prisma.cart_items.update({
        where: { id },
        data,
      });
      return cart_items;
    } catch (error) {
      return error;
    }
  }

  async remove(id: number): Promise<Cart_items> {
    try {
      return this.prisma.cart_items.delete({
        where: { id },
      });
    } catch (error) {
      return error;
    }
  }

  async getUserCart(req: Request, res: Response): Promise<Cart_items[]> {
    try {
      const user_id = await this.getId(req, res);
      return this.prisma.cart_items.findMany({
        where: { user_id },
        include: {
          product: {
            include: { product_model: true, brand: true, category: true },
          },
        },
      });
    } catch (error) {
      return error;
    }
  }

  async transferCart(user_id: string, session_id: string) {
    try {
      return this.prisma.cart_items.updateMany({
        where: { user_id: session_id },
        data: { user_id },
      });
    } catch (error) {
      console.log(error, 'transfer cart');
      return false;
    }
  }

  async getId(req: Request, res: Response): Promise<string> {
    try {
      const [bearer, token] = req.headers.authorization?.split(' ') ?? [];
      let user_id: string;
      if (bearer !== 'Bearer' || !token) {
        user_id = req.cookies['session_id'];
        if (!user_id) {
          user_id = v4();
          res.cookie('session_id', user_id);
        }
      } else {
        const { id } = await this.jwtService.verifyAsync(token, {
          secret: process.env.ACCESS_KEY,
        });
        user_id = String(id);
      }
      return user_id;
    } catch (error) {
      const user_id = v4();
      res.cookie('session_id', user_id);
      return user_id;
    }
  }
}
