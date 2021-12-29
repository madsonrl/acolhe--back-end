
import { Router } from "express";

import { CreateCommentController } from "@modules/comments/useCases/createComment/CreateCommentController";
import { ListCommentsController } from "@modules/comments/useCases/listComments/listCommentsController";


const commentsRoutes = Router();

const createCommentController = new CreateCommentController();
const listCommentsController = new ListCommentsController();

commentsRoutes.post("/", createCommentController.handle);
commentsRoutes.get("/", listCommentsController.handle);

export { commentsRoutes };
