import { Injectable } from '@nestjs/common';
import { UserRole } from '../common/common/enums.user-roles';

@Injectable()
export class UsersService {
  private readonly users: any[] = []; // Simulación de base de datos

  constructor() {}

  async createUser(userDto: any): Promise<any> {
    // Lógica para crear un nuevo usuario
    const newUser = { ...userDto, role: UserRole.Regular }; // Asignar rol por defecto
    this.users.push(newUser);
    return newUser;
  }

  async findUserByUsername(username: string): Promise<any> {
    // Lógica para buscar un usuario por nombre de usuario
    return this.users.find(user => user.username === username);
  }

  async updateUserRole(username: string, newRole: UserRole): Promise<any> {
    // Lógica para actualizar el rol de un usuario
    const user = this.users.find(user => user.username === username);
    if (user) {
      user.role = newRole;
    }
    return user;
  }
}
