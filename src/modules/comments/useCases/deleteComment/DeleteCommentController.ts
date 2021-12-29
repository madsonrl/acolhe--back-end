import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCommentUseCase } from "./DeleteCommentUseCase";

class DeleteCommentController {
    async handle(request: Request, response: Response): Promise<Response> {
        
        const {id} = request.body;

        const deleteCommentUseCase = container.resolve(
            DeleteCommentUseCase
        );
        await deleteCommentUseCase.execute({
            id
        });
        
        return response.status(200).send();
    }
}

export { DeleteCommentController };
