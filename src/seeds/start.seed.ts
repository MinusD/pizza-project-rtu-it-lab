import { Seeder, OnSeederInit } from 'nestjs-sequelize-seeder';
import { User } from 'src/users/user.model';

@Seeder({
    model: User
})
export class StartSeed implements OnSeederInit {
    run() {
        const data = [
            {
                name: 'Admin',
                email: "a@a.a",
                password: 'admin_password',
                contract: 123
            },
            {
                name: 'Editor',
                email: "v@v.v",
                password: 'editor_password',
                contract: 123
            },
        ];
        return data;
    }
}