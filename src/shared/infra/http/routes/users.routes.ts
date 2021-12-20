import { Router } from "express";

import { CreateUserController } from "../../../../modules/accounts/useCases/createUser/CreateUserController";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createUserController.handle
);

export { usersRoutes };
