import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { UserRoles } from 'src/roles/user-roles.model';
import { User } from 'src/users/user.model';

@Seeder({
    model: UserRoles,
    unique: ['userId']
})
export class UserRolesSeed implements OnSeederInit {
    run() {

        const data = [
            {
                userId: 1,
                roleId: 1,
            },
            {
                userId: 2,
                roleId: 2,
            },
            {
                userId: 3,
                roleId: 3,
            },
            {
                userId: 4,
                roleId: 4,
            }
        ];
        return data;
    }
}