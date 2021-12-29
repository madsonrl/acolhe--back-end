import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCommentUseCase } from "./CreateCommentUseCase";

class CreateCommentController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { msg, username, platform_id } = request.body;

        const createCommentUseCase = container.resolve(CreateCommentUseCase);

        const comment = await createCommentUseCase.execute({
            msg,
            username,
            platform_id,
        });

        return response.status(201).json(comment);
    }
}

export { CreateCommentController };
