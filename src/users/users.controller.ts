import { Controller, Get, UseGuards } from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {}

    @ApiOperation({ summary: 'Список пользователей' })
    @ApiResponse({ status: 200, type: [User] })
    //@Roles('Admin')
    //@UseGuards(RolesGuard)
    @Get()
    getAll() {
        return this.userService.getAllUsers();
    }
}
