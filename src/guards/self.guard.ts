import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SelfGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const user = request?.user;
    const id = request?.params?.id;
    try {
      if (user?.id !== +id) {
        throw new ForbiddenException();
      }
      return true;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
