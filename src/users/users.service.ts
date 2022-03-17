import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { AddRoleDto } from './dto/add-role.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userRepository: typeof User,
                private rolesService: RolesService) {
    }

    async createUser(dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        const roleName = dto.role;
        this.addRole({userId: user.id, value: roleName});
        return user;
    }

    async getAllUsers() {
        // @ts-ignore
        const users = await this.userRepository.findAll({ include: { all: true } }); // Возращаем всех пользователей со всеми зависимостями
        return users;
    }

    async getUserByEmail(email: string){
        const user = await this.userRepository.findOne({where: {email}});
        return user;
    }
    async addRole(dto: AddRoleDto){
        const user = await this.userRepository.findByPk(dto.userId);
        const role = await this.rolesService.getRoleByValue(dto.value);
        if (role && user) {
            await user.$add('role', role.id);
            if (user.roles){
                user.roles.push(role);
            } else {
                user.roles = [role];
            }
            return dto;
        }

        throw new HttpException('Пользователь или роль не найдены', HttpStatus.NOT_FOUND);
    }
}
