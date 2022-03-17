import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { User } from 'src/users/user.model';


@Seeder({
    model: User,
    unique: ['name', 'email', 'contract'],
})
export class UsersSeed implements OnSeederInit {
    run() {
        const data = [
            {
                name: 'Владецев Владеец Владеевич',
                email: 'o@o.o',
                password: '123456',
                contract: 12,
            },
            {
                name: 'Админов Администратор Админыч',
                email: 'a@a.a',
                password: '123456',
                contract: 13,
            },
            {
                name: 'Официантов Официан Оцифантович',
                email: 'k@k.k',
                password: '123456',
                contract: 14,
            },
            {
                name: 'Поваров Повар Поварович',
                email: 'p@p.p',
                password: '123456',
                contract: 16,
            },
        ];
        return data;
        
    }

    everyone(data) {
        console.log(data)
        return data;
    }
}