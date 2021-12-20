import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepositoy";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    username: string;
    password: string;
}

interface IResponse {
    user: {
        username: string;
        name: string;
    };
    token: string;
}

@injectable()
class AthenticateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUsersRepository
    ) {}

    async execute({ username, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByUsername(username);

        if (!user) {
            throw new AppError("Username or password invalid");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError("Username or password invalid");
        }

        const token = sign({}, "a7eca531218ac4db291218b38a6ddcd3", {
            subject: user.id,
            expiresIn: "1d",
        });

        const tokenReturn: IResponse = {
            token,
            user: {
                username: user.username,
                name: user.name,
            },
        };

        return tokenReturn;
    }
}

export { AthenticateUserUseCase };
