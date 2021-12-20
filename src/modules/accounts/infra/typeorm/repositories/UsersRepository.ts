import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDT0";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepositoy";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ username, name, password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({
            username,
            name,
            password,
        });

        await this.repository.save(user);
    }

    async findByUsername(username: string): Promise<User> {
        const user = await this.repository.findOne({ username });
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne(id);
        return user;
    }
}

export { UsersRepository };
