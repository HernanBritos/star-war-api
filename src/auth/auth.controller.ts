import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: any): Promise<any> {
    // Lógica para registrar usuarios
  }

  @Post('signin')
  async signIn(@Body() body: any): Promise<any> {
    // Lógica para iniciar sesión
  }
}

