import { ICreateSuggestionDTO } from "../dtos/ICreateSuggestionDTO";
import { Suggestion } from "../infra/typeorm/entities/Suggestion";

interface ISuggestionsRepository {
    findById(id: string): Promise<Suggestion>;
    list(): Promise<Suggestion[]>;
    create({ username, msg }: ICreateSuggestionDTO): Promise<void>;
}

export { ISuggestionsRepository };
