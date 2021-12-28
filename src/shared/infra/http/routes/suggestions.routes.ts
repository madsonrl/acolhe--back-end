import { Router } from "express";

import { CreateSuggestionController } from "@modules/suggestions/useCases/createSuggestion/CreateSuggestionController";
import { ListSuggestionsController } from "@modules/suggestions/useCases/listSuggestions/ListSuggestionsController";

const suggestionsRoutes = Router();

const createSuggestionsController = new CreateSuggestionController();
const listSuggestionsController = new ListSuggestionsController();

suggestionsRoutes.post("/", createSuggestionsController.handle);
suggestionsRoutes.get("/", listSuggestionsController.handle);

export { suggestionsRoutes };
