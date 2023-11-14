import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdatePositionDto } from './dto';

@Injectable()
export class PositionService {
  constructor(private readonly prisma: PrismaService) {}

  async createPosition() {
    const position = await this.prisma.position.findFirst({ where: { id: 1 } });
    if (position)
      await this.prisma.position.delete({ where: { id: position.id } });

    const data = {
      brand_positioning: (await this.prisma.brand.findMany({})).map(
        (brand) => brand?.id,
      ),
      attribute_positioning: (await this.prisma.attribute.findMany({})).map(
        (attribute) => attribute?.id,
      ),
      category_positioning: (await this.prisma.category.findMany({})).map(
        (category) => category?.id,
      ),
      attribute_group_positioning: (
        await this.prisma.attribute_Group.findMany({})
      ).map((attr_group) => attr_group?.id),
    };
    const newPosition = await this.prisma.position.create({
      data: {
        id: 1,
        ...data,
      },
    });
    return newPosition;
  }

  async fetchPosition() {
    let position;
    position = await this.prisma.position.findFirst({
      where: {
        id: 1,
      },
    });
    if (!position) position = await this.createPosition();

    const data = {
      brand_positioning: await this.fetcher(
        position.brand_positioning,
        this.prisma.brand,
      ),
      attribute_positioning: await this.fetcher(
        position.attribute_positioning,
        this.prisma.attribute,
      ),
      category_positioning: await this.fetcher(
        position.attribute_group_positioning,
        this.prisma.attribute_Group,
      ),
      attribute_group_positioning: await this.fetcher(
        position.category_positioning,
        this.prisma.category,
      ),
    };

    return data;
  }

  async fetcher(array, from) {
    const result = [];
    for (let item_id of array) {
      let fetch_item = await from.findFirst({ where: { id: item_id } });
      result.push(fetch_item);
    }
    return result;
  }

  async isHave(id, from) {
    const item = await from.findFirst({ where: { id } });
    return item;
  }

  async updatePosition(updatePositionDto: UpdatePositionDto) {
    const position = await this.prisma.position.findFirst({
      where: {
        id: 1,
      },
    });
    if (!position) await this.createPosition();

    const payload = {};
    for (let key in updatePositionDto) {
      if (updatePositionDto[key].length !== 0) {
        if (key == 'brand_positioning') {
          const baseArr = [];
          for (let item of updatePositionDto[key])
            if (await this.isHave(item, this.prisma.brand)) baseArr.push(item);

          payload[key] = baseArr;
        } else if (key == 'attribute_positioning') {
          const baseArr = [];
          for (let item of updatePositionDto[key])
            if (await this.isHave(item, this.prisma.attribute))
              baseArr.push(item);

          payload[key] = baseArr;
        } else if (key == 'category_positioning') {
          const baseArr = [];
          for (let item of updatePositionDto[key])
            if (await this.isHave(item, this.prisma.category))
              baseArr.push(item);

          payload[key] = baseArr;
        } else if (key == 'attribute_group_positioning') {
          const baseArr = [];
          for (let item of updatePositionDto[key])
            if (await this.isHave(item, this.prisma.attribute_Group))
              baseArr.push(item);

          payload[key] = baseArr;
        }
      }
    }
    const updatedPosition = await this.prisma.position.update({
      where: { id: 1 },
      data: { ...payload },
    });
    return updatedPosition;
  }

  async deletePosition(id: number) {
    const position = await this.prisma.position.findFirst({
      where: {
        id,
      },
    });
    if (!position) throw new BadRequestException('Position not found');
    const deletedPosition = await this.prisma.position.delete({
      where: { id },
    });
    return deletedPosition;
  }
}
