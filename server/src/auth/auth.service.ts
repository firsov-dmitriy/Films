import { CreateUserDto } from './createUser.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async createUser(userDto: CreateUserDto) {
    return { userDto };
  }
}
