// auth/roles.guard.ts

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '../users/roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<UserRole[]>('roles', context.getHandler());
    if (!roles) {
      return true; // Si no se especifican roles, se permite el acceso
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Suponiendo que el usuario está almacenado en el objeto de solicitud
    return roles.includes(user.role); // Se permite el acceso si el usuario tiene uno de los roles requeridos
  }
}
