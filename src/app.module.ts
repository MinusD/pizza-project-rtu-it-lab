import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.model';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { UserRoles } from './roles/user-roles.model';

// @ts-ignore
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
      // Выбор файла конфигурации
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`,
      }),
      // Подключение к бд
      SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [User, Role, UserRoles],
          autoLoadModels: true,
      }),
      UsersModule,
      AuthModule,
      RolesModule,
  ],
})
export class AppModule {}
