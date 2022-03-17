import {forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [
    forwardRef(() => UsersModule), // Что бы зависимость не была цикличной
    JwtModule.register({
      secret: process.env.APP_TOKEN || 'SECRET',
      signOptions: {
        expiresIn: '24h' // Время жизни токена
      }
    })
  ],
  exports: [
      AuthService,
      JwtModule
  ]
})
export class AuthModule {}
