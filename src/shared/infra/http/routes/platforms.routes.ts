import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreatePlatformController } from "@modules/platforms/useCases/createPlatform/CreatePlatformController";
import { ListPlatformsController } from "@modules/platforms/useCases/listPlatforms/ListPlatformsController";
import { UpdatePlatformController } from "@modules/platforms/useCases/updatePlatform/updatePlatformController";
import { UpdatePlatformImageController } from "@modules/platforms/useCases/updatePlatFormImage/UpdatePlatformImageController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const platformsRoutes = Router();

const uploadImage = multer(uploadConfig.upload("./platformsImages"));

const createPlatformController = new CreatePlatformController();
const listPlatformsController = new ListPlatformsController();
const updatePlatformController = new UpdatePlatformController();
const updatePlatformImageController = new UpdatePlatformImageController();

platformsRoutes.post(
    "/",
    ensureAuthenticated,
    ensureAdmin,
    uploadImage.single("image"),
    createPlatformController.handle
);

platformsRoutes.patch(
    "/image",
    ensureAuthenticated,
    ensureAdmin,
    uploadImage.single("image"),
    updatePlatformImageController.handle
);

platformsRoutes.get("/", listPlatformsController.handle);

platformsRoutes.put(
    "/update",
    ensureAuthenticated,
    ensureAdmin,
    updatePlatformController.handle
);

export { platformsRoutes };
