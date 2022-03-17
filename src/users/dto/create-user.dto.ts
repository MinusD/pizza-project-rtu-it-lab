import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({example: 'Луковников Дмитрий Романович', description: 'ФИО сотрудника'})
    @IsString({message: "Должно быть строкой"})
    readonly name: string;

    @ApiProperty({example: 'example@mail.ru', description: 'Электорнная почта'})
    @IsString({message: "Должно быть строкой"})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;

    @ApiProperty({example: '123456', description: 'Пароль'})
    @IsString({message: "Должно быть строкой"})
    @Length(4,16, {message: "Пароль от 4 до 16 символов"})
    readonly password: string;

    @ApiProperty({example: '146', description: 'Номер договора'})
    readonly contract: number;
}
