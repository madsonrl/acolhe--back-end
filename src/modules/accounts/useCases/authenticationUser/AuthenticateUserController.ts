import { Request, Response } from "express";
import { container } from "tsyringe";

import { AthenticateUserUseCase } from "./AuthenticateUserUseCase";

class AthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password } = request.body;

        const authenticateUserUseCase = container.resolve(
            AthenticateUserUseCase
        );

        const token = await authenticateUserUseCase.execute({
            username,
            password,
        });

        return response.json(token);
    }
}

export { AthenticateUserController };
