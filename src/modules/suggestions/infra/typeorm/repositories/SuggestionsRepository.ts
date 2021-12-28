import { getRepository, Repository } from "typeorm";

import { ICreateSuggestionDTO } from "@modules/suggestions/dtos/ICreateSuggestionDTO";
import { ISuggestionsRepository } from "@modules/suggestions/repositories/ISuggestionsRepository";

import { Suggestion } from "../entities/Suggestion";

class SuggestionsRepository implements ISuggestionsRepository {
    private repository: Repository<Suggestion>;

    constructor() {
        this.repository = getRepository(Suggestion);
    }

    async create({
        id,
        username,
        msg,
    }: ICreateSuggestionDTO): Promise<Suggestion> {
        const suggestion = this.repository.create({
            id,
            username,
            msg,
        });

        await this.repository.save(suggestion);

        return suggestion;
    }

    async list(): Promise<Suggestion[]> {
        const suggestions = await this.repository.find();
        return suggestions;
    }

    async findById(id: string): Promise<Suggestion> {
        const suggestion = await this.repository.findOne({ id });
        return suggestion;
    }
}

export { SuggestionsRepository };
