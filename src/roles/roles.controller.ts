import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import {ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags("Роли")
@Controller('roles')
export class RolesController {
    constructor(private rolesService: RolesService) {
    }
    /*
    @Post()
    @ApiResponse({ status: 200})
    create(@Body() dto: CreateRoleDto){
        return this.rolesService.createRole(dto);
    }*/

    @Get('/:value')
    @ApiResponse({ status: 200 })
    getByValue(@Param('value') value: string ){
        return this.rolesService.getRoleByValue(value);
    }
}
