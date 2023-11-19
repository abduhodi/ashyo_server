import { BadRequestException, Injectable } from '@nestjs/common';
import { Views } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateViewDto } from './dto/create-view.dto';
import { UpdateViewDto } from './dto/update-view.dto';
import { Cart_itemsService } from '../cart_items/cart_items.service';
import { Request, Response } from 'express';

@Injectable()
export class ViewsService {
  constructor(
    private prisma: PrismaService,
    private cartService: Cart_itemsService,
  ) {}

  async create(
    data: CreateViewDto,
    req: Request,
    res: Response,
  ): Promise<Views> {
    try {
      const user_id = await this.cartService.getId(req, res);
      const exist = await this.prisma.views.findFirst({
        where: {
          product_id: data.product_id,
          user_id,
        },
      });
      if (exist) {
        throw new BadRequestException('View is already exists');
      }
      const item = await this.prisma.views.create({
        data: { product_id: data.product_id, user_id, view_date: new Date() },
      });
      return item;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async findAll(): Promise<Views[]> {
    try {
      const items = await this.prisma.views.findMany({
        // include: { user: true, product: true },
      });
      return items;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async findOne(id: number): Promise<Views | null> {
    try {
      const item = await this.prisma.views.findUnique({
        where: { id },
        // include: {
        //   user: true,
        //   product: true
        // },
      });
      return item;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async update(id: number, data: UpdateViewDto): Promise<Views> {
    try {
      const item = await this.prisma.views.findUnique({
        where: { id },
      });
      if (!item) {
        throw new BadRequestException('View is not found');
      }
      const update = await this.prisma.views.update({
        where: { id },
        data,
      });
      return update;
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async remove(id: number): Promise<object> {
    try {
      const item = await this.prisma.views.findUnique({
        where: { id },
      });
      if (!item) {
        throw new BadRequestException('View is not found');
      }
      await this.prisma.views.delete({ where: { id } });
      return { message: 'delete success' };
    } catch (error) {
      throw new BadRequestException(error?.message);
    }
  }

  async transferCart(user_id: string, session_id: string) {
    try {
      return this.prisma.views.updateMany({
        where: { user_id: session_id },
        data: { user_id },
      });
    } catch (error) {
      console.log(error, 'transfer cart');
      return false;
    }
  }
}
