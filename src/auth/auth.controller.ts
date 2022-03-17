import {Body, Controller, Post} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {CreateUserDto} from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.model';
import {AuthService} from './auth.service';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('/login')
    @ApiResponse({status: 200})
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @Post('/register')
    @ApiResponse({status: 200, type: User})
    register(@Body() userDto: CreateUserDto) {
        return this.authService.register(userDto);
    }
}
