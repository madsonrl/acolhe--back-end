import { Router } from "express";

import { CreatePlatformController } from "@modules/platforms/useCases/createPlatform/CreatePlatformController";
import { ListPlatformsController } from "@modules/platforms/useCases/listPlatforms/ListPlatformsController";
import { UpdatePlatformController } from "@modules/platforms/useCases/updatePlatform/updatePlatformController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const platformsRoutes = Router();

const createPlatformController = new CreatePlatformController();
const listPlatformsController = new ListPlatformsController();
const updatePlatformController = new UpdatePlatformController();

platformsRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    createPlatformController.handle
);

platformsRoutes.get("/", ensureAuthenticated, listPlatformsController.handle);

platformsRoutes.put(
    "/update",
    ensureAuthenticated,
    updatePlatformController.handle
);

export { platformsRoutes };
