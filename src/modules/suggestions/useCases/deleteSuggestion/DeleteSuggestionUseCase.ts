import { inject, injectable } from "tsyringe";

import { ISuggestionsRepository } from "@modules/suggestions/repositories/ISuggestionsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    id: string;
}

@injectable()
class DeleteSuggestionUseCase {
    constructor(
        @inject("SuggestionsRepository")
        private suggestionsRepository: ISuggestionsRepository
    ) {}

    async execute({ id }: IRequest): Promise<void> {

        const suggestionAlreadyExists = await this.suggestionsRepository.findById(
            id
        );

        if (!suggestionAlreadyExists) {
            throw new AppError("Suggestion not exists!");
        }

        await this.suggestionsRepository.delete(
            id
        );

    }
}

export { DeleteSuggestionUseCase };
