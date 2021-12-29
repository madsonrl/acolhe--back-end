import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCommentsUseCase } from "./ListCommentsUseCase";

class ListCommentsController {
    async handle(request: Request, reponse: Response): Promise<Response> {
        const { platform_id, id } = request.query;

        const listCommentsUseCase = container.resolve(ListCommentsUseCase);

        const comments = await listCommentsUseCase.execute({
            platform_id: platform_id as string,
            id: id as string,
        });

        return reponse.json(comments);
    }
}
export { ListCommentsController };
