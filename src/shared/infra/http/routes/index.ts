import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { platformsRoutes } from "./platforms.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);

router.use("/platforms", platformsRoutes);

router.use(authenticateRoutes);

export { router };
