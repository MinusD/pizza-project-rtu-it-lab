import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
    UnauthorizedException
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles-auth.decorator';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/user.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { Role } from 'src/roles/roles.model';


@Injectable()
export class RolesGuard implements CanActivate{
    constructor( private jwtService: JwtService,
                 private reflector: Reflector,
                @InjectModel(UserRoles) private userRepository: typeof UserRoles,
                @InjectModel(Role) private roleRepository: typeof Role,) {

    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        return true;
        try {
            const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
                context.getHandler(),
                context.getClass(),
            ])
            if (!requiredRoles){
                return true;
            }
            const req = context.switchToHttp().getRequest();
            const authHeader = req.headers.authorization;
            const bearer = authHeader.split(' ')[0];
            const token = authHeader.split(' ')[1];
            if(bearer !== 'Bearer' || !token){
                throw new UnauthorizedException({ message: 'Пользователь не авторизован' })
            }
            const user = this.jwtService.verify(token);
            req.user = user;
            return user.roles.some(role => requiredRoles.includes(role.value));
        } catch (e) {
            console.log(e);
            throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
        }
    }
}