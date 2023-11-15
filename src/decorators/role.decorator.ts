import { Reflector } from '@nestjs/core';

export const ROLE_KEY = 'roles';
export const Roles = Reflector.createDecorator<string[]>({ key: ROLE_KEY });
