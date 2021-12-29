import { ICreateSuggestionDTO } from "../dtos/ICreateSuggestionDTO";
import { Suggestion } from "../infra/typeorm/entities/Suggestion";

interface ISuggestionsRepository {
    findById(id: string): Promise<Suggestion>;
    list(): Promise<Suggestion[]>;
    create({ id, username, msg }: ICreateSuggestionDTO): Promise<Suggestion>;
    delete( id:string ): Promise<void>;
}

export { ISuggestionsRepository };
