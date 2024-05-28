// users/users.controller.ts

import { Controller, Post, Body, Put, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRole } from '../common/common/enums.user-roles';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() userDto: any): Promise<any> {
    // Lógica para crear un nuevo usuario
    return this.usersService.createUser(userDto);
  }

  @Put(':username/role')
  async updateUserRole(@Param('username') username: string, @Body('role') newRole: UserRole): Promise<any> {
    // Lógica para actualizar el rol de un usuario
    return this.usersService.updateUserRole(username, newRole);
  }
}

