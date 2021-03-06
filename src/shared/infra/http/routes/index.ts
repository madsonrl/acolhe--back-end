import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { commentsRoutes } from "./comments.routes";
import { platformsRoutes } from "./platforms.routes";
import { suggestionsRoutes } from "./suggestions.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);

router.use("/platforms", platformsRoutes);
router.use("/suggestions", suggestionsRoutes);
router.use("/comments", commentsRoutes);

router.use(authenticateRoutes);

export { router };
