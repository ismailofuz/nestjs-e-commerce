import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { RegisterDto } from './dto/user-register.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() register: RegisterDto) {
    return this.authService.register(register);
  }

  @Post('login')
  login(@Body() login: UserLoginDto){
    return this.authService.login(login);
  }
}
