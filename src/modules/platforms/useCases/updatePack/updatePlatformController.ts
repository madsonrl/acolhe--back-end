import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePlatformUseCase } from "./updatePlatformUsecase";

class UpdatePlatformController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, name, image, link, abstract, details } = request.body;

        const updatePlatformUseCase = container.resolve(UpdatePlatformUseCase);

        await updatePlatformUseCase.execute({
            id,
            name,
            image,
            link,
            abstract,
            details,
        });

        return response.status(200).send();
    }
}

export { UpdatePlatformController };
