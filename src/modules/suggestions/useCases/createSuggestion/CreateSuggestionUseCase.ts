import { inject, injectable } from "tsyringe";

import { Suggestion } from "@modules/suggestions/infra/typeorm/entities/Suggestion";
import { ISuggestionsRepository } from "@modules/suggestions/repositories/ISuggestionsRepository";

interface IRequest {
    id: string;
    username: string;
    msg: string;
}

@injectable()
class CreateSuggestionUseCase {
    constructor(
        @inject("SuggestionsRepository")
        private suggestionsRepository: ISuggestionsRepository
    ) {}

    async execute({ id, username, msg }: IRequest): Promise<Suggestion> {
        const suggestion = await this.suggestionsRepository.create({
            id,
            username,
            msg,
        });

        return suggestion;
    }
}

export { CreateSuggestionUseCase };
