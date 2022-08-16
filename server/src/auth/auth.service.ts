import { CreateUserDto } from './createUser.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/users/users.schema';

@Injectable()
export class AuthService {
  async createUser(userDto: CreateUserDto) {
    return { userDto };
  }
}
