import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteSuggestionUseCase } from "./DeleteSuggestionUseCase";

class DeleteSuggestionController {
    async handle(request: Request, response: Response): Promise<Response> {
        
        const {id} = request.body;

        const deleteSuggestionUseCase = container.resolve(
            DeleteSuggestionUseCase
        );
        await deleteSuggestionUseCase.execute({
            id
        });
        
        return response.status(200).send();
    }
}

export { DeleteSuggestionController };
