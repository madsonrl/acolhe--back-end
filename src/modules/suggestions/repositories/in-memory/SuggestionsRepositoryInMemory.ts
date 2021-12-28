import { ICreateSuggestionDTO } from "../../dtos/ICreateSuggestionDTO";
import { Suggestion } from "../../infra/typeorm/entities/Suggestion";
import { ISuggestionsRepository } from "../ISuggestionsRepository";

class SuggestionsRepositoryInMemory implements ISuggestionsRepository {
    suggestions: Suggestion[] = [];

    async list(): Promise<Suggestion[]> {
        const all = this.suggestions;

        return all;
    }

    async create({ username, msg }: ICreateSuggestionDTO): Promise<Suggestion> {
        const suggestion = new Suggestion();

        Object.assign(suggestion, {
            username,
            msg,
        });

        this.suggestions.push(suggestion);

        return suggestion;
    }

    async findById(id: string): Promise<Suggestion> {
        const suggestion = this.suggestions.find(
            (suggestion) => suggestion.id === id
        );
        return suggestion;
    }
}

export { SuggestionsRepositoryInMemory };
