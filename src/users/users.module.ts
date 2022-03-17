import {forwardRef, Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {SequelizeModule} from '@nestjs/sequelize';
import {AuthModule} from 'src/auth/auth.module';
import { User } from './user.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { SeederModule } from 'nestjs-sequelize-seeder';
import { RoleSeed } from 'src/seeds/roles.seed';
import { UsersSeed } from 'src/seeds/users.seed';
import { UserRolesSeed } from 'src/seeds/get-roles.seed';

@Module({
    providers: [UsersService],
    controllers: [UsersController],
    imports: [
        SequelizeModule.forFeature([User, Role, UserRoles]),
        SeederModule.forFeature([RoleSeed]),
        SeederModule.forFeature([UsersSeed]),
        //SeederModule.forFeature([UserRolesSeed]), // Баг библиотеки
        RolesModule,
        forwardRef(() => AuthModule)
    ],
    exports: [
        UsersService
    ]
})
export class UsersModule {
}
