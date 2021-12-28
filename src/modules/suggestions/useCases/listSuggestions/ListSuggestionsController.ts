import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSuggestionsUsecase } from "./ListSuggestionsUseCase";

class ListSuggestionsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listSuggestionsUseCase = container.resolve(
            ListSuggestionsUsecase
        );
        const all = await listSuggestionsUseCase.execute();
        return response.json(all);
    }
}

export { ListSuggestionsController };
