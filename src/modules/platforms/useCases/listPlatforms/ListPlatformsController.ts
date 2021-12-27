import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListPlatformsUsecase } from "./ListPlatformsUseCase";

class ListPlatformsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listPlatformsUseCase = container.resolve(ListPlatformsUsecase);
        const all = await listPlatformsUseCase.execute();
        return response.json(all);
    }
}

export { ListPlatformsController };
