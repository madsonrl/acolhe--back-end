import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDT0";
import { User } from "@modules/accounts/infra/typeorm/entities/User";

import { IUsersRepository } from "../IUsersRepositoy";

class UsersRepositoryInMemory implements IUsersRepository {
    users: User[] = [];
    async create({ username, name, password }: ICreateUserDTO): Promise<void> {
        const user = new User();

        Object.assign(user, {
            username,
            name,
            password,
        });

        this.users.push(user);
    }
    async findByUsername(username: string): Promise<User> {
        return this.users.find((user) => user.username === username);
    }

    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }
}

export { UsersRepositoryInMemory };
