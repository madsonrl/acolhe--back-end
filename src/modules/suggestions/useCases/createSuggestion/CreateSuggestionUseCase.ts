import { inject, injectable } from "tsyringe";

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

    async execute({ id, username, msg }: IRequest): Promise<void> {
        await this.suggestionsRepository.create({
            id,
            username,
            msg,
        });
    }
}

export { CreateSuggestionUseCase };
