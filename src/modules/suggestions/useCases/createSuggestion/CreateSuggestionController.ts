import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSuggestionUseCase } from "./CreateSuggestionUseCase";

class CreateSuggestionController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, username, msg } = request.body;

        const createSuggestionUseCase = container.resolve(
            CreateSuggestionUseCase
        );
        await createSuggestionUseCase.execute({
            id,
            username,
            msg,
        });
        return response.status(201).send();
    }
}

export { CreateSuggestionController };
