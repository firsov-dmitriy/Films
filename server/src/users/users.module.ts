import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './users.schema';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory() {
          const schema = UserSchema;
          schema.plugin(require('mongoose-unique-validator'), {
            message: 'Error',
          });
          return schema;
        },
      },
    ]),
  ],
  exports: [UsersService],
})
export class UsersModule {}
