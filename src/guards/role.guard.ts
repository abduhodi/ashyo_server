import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { Reflector } from '@nestjs/core';
import { ROLE_KEY } from '../decorators/role.decorator';
import { ROLE } from '../enums/roles.enum';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      const { user } = context.switchToHttp().getRequest();
      const roles = this.reflector.getAllAndOverride<ROLE[]>(ROLE_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      const hasAccess = roles.some((role) => user?.role === role);
      if (!hasAccess) {
        throw new ForbiddenException();
      }
      return true;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
