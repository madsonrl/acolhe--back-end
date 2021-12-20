import { Router } from "express";

import { AthenticateUserController } from "../../../../modules/accounts/useCases/authenticationUser/AuthenticateUserController";

const authenticateRoutes = Router();

const athenticateUserController = new AthenticateUserController();

authenticateRoutes.post("/sessions", athenticateUserController.handle);

export { authenticateRoutes };
