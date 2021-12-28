import { inject, injectable } from "tsyringe";

import { Suggestion } from "@modules/suggestions/infra/typeorm/entities/Suggestion";
import { SuggestionsRepository } from "@modules/suggestions/infra/typeorm/repositories/SuggestionsRepository";
import { ISuggestionsRepository } from "@modules/suggestions/repositories/ISuggestionsRepository";

@injectable()
class ListSuggestionsUsecase {
    constructor(
        @inject(SuggestionsRepository)
        private suggestionsRepository: ISuggestionsRepository
    ) {}

    async execute(): Promise<Suggestion[]> {
        const suggestions = await this.suggestionsRepository.list();
        return suggestions;
    }
}

export { ListSuggestionsUsecase };
