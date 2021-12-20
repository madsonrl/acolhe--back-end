import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDT0";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepositoy";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUsecase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute({ username, name, password }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByUsername(
            username
        );

        if (userAlreadyExists) {
            throw new AppError("User already exists");
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.create({
            username,
            name,
            password: passwordHash,
        });
    }
}

export { CreateUserUsecase };
