import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUsecase } from "./CreateUserUseCase";

class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username, name, password } = request.body;
        const createUserUseCase = container.resolve(CreateUserUsecase);
        await createUserUseCase.execute({
            username,
            name,
            password,
        });

        response.header("Access-Control-Allow-Origin", "*");
        return response.status(201).send();
    }
}

export { CreateUserController };
