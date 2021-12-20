import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDT0";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateUserUsecase } from "../createUser/CreateUserUseCase";
import { AthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUsecase: CreateUserUsecase;

describe("Authenticate User ", () => {
    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        authenticateUserUseCase = new AthenticateUserUseCase(
            usersRepositoryInMemory
        );
        createUserUsecase = new CreateUserUsecase(usersRepositoryInMemory);
    });

    it("Should be able to authenticate an user", async () => {
        const user: ICreateUserDTO = {
            username: "madson",
            name: "Teste User",
            password: "teste@123",
        };

        await createUserUsecase.execute(user);

        const result = await authenticateUserUseCase.execute({
            username: user.username,
            password: user.password,
        });

        expect(result).toHaveProperty("token");
    });

    it("should not be able to authenticate an nonexistent user", () => {
        expect(async () => {
            await authenticateUserUseCase.execute({
                username: "MadsonLemos",
                password: "testeFalse",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to authenticate with incorrect password", () => {
        expect(async () => {
            const user: ICreateUserDTO = {
                username: "madson",
                name: "User test error",
                password: "mads@123",
            };

            await createUserUsecase.execute(user);

            await authenticateUserUseCase.execute({
                username: user.username,
                password: "teste@falsepassword",
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
