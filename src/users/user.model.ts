import {BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from 'sequelize-typescript';
import {ApiProperty} from '@nestjs/swagger';

interface UserCreationAttrs {
    name: string;
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ApiProperty({example: 'Луковников Дмитрий Романович', description: 'ФИО сотрудника'})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @ApiProperty({example: 'example@mail.ru', description: 'Электорнная почта'})
    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false
    })
    email: string;

    @ApiProperty({example: '123456', description: 'Пароль'})
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @ApiProperty({example: '146', description: 'Номер договора'})
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    contract: number;

}
