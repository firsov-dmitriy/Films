import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.4rrnu.mongodb.net/?retryWrites=true&w=majority',
    ),
    AuthModule,
  ],
})
export class AppModule {}
