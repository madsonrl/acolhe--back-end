import { SuggestionsRepositoryInMemory } from "@modules/suggestions/repositories/in-memory/SuggestionsRepositoryInMemory";

import { CreateSuggestionUseCase } from "./CreateSuggestionUseCase";

let createSuggestionUseCase: CreateSuggestionUseCase;
let suggestionsRepositoryInMemory: SuggestionsRepositoryInMemory;

describe("Criar Sugestão", () => {
    beforeEach(() => {
        suggestionsRepositoryInMemory = new SuggestionsRepositoryInMemory();
        createSuggestionUseCase = new CreateSuggestionUseCase(
            suggestionsRepositoryInMemory
        );
    });

    it("should be able to  create a new Suggestion", async () => {
        const suggestion = {
            id: "idsugesta",
            username: "anom",
            msg: "test",
        };

        await createSuggestionUseCase.execute({
            id: suggestion.id,
            username: suggestion.username,
            msg: suggestion.msg,
        });
        const suggestionCreatead = await suggestionsRepositoryInMemory.findById(
            suggestion.id
        );

        expect(suggestionCreatead).toHaveProperty("id");
    });
});
