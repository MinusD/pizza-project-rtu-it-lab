import {Seeder, OnSeederInit} from 'nestjs-sequelize-seeder';
import {Role} from 'src/roles/roles.model';

@Seeder({
    model: Role,
    unique: ['value', 'description'],
})
export class RoleSeed implements OnSeederInit {
    run() {
        const data = [
            {
                value: 'owner',
                description: 'Владелец',
            },
            {
                value: 'admin',
                description: 'Администратор',
            },
            {
                value: 'waiter',
                description: 'Официант',
            },
            {
                value: 'kitchenWorker',
                description: 'Работник кухни',
            }
        ];
        console.log(data)
        return data;
    }

}