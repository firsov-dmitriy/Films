import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  createUser(@Body() userDto: CreateUserDto) {
    return this.authService.createUser(userDto);
  }
  @Get('/')
  getSome() {
    return 'some';
  }
}
