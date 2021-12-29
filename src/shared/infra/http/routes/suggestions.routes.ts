import { Router } from "express";

import { CreateSuggestionController } from "@modules/suggestions/useCases/createSuggestion/CreateSuggestionController";
import { ListSuggestionsController } from "@modules/suggestions/useCases/listSuggestions/ListSuggestionsController";
import { DeleteSuggestionController } from "@modules/suggestions/useCases/deleteSuggestion/deleteSuggestion/DeleteSuggestionController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const suggestionsRoutes = Router();

const createSuggestionsController = new CreateSuggestionController();
const listSuggestionsController = new ListSuggestionsController();
const deleteSuggestionController = new DeleteSuggestionController();

suggestionsRoutes.post("/", createSuggestionsController.handle);
suggestionsRoutes.get("/", listSuggestionsController.handle);
suggestionsRoutes.delete("/delete", ensureAuthenticated, ensureAdmin,deleteSuggestionController.handle);

export { suggestionsRoutes };
