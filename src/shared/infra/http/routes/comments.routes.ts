
import { Router } from "express";

import { CreateCommentController } from "@modules/comments/useCases/createComment/CreateCommentController";
import { ListCommentsController } from "@modules/comments/useCases/listComments/listCommentsController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { DeleteCommentController } from "@modules/comments/useCases/deleteComment/DeleteCommentController";


const commentsRoutes = Router();

const createCommentController = new CreateCommentController();
const listCommentsController = new ListCommentsController();
const deleteCommentController = new DeleteCommentController();

commentsRoutes.post("/", createCommentController.handle);
commentsRoutes.get("/", listCommentsController.handle);
commentsRoutes.delete("/delete", ensureAuthenticated, ensureAdmin , deleteCommentController.handle);
export { commentsRoutes };
