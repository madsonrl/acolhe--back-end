import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePlatformUseCase } from "./CreatePlatformUseCase";

class CreatePlatformController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, name, image, link, abstract, details } = request.body;
        const createPlatformUseCase = container.resolve(CreatePlatformUseCase);
        await createPlatformUseCase.execute({
            id,
            name,
            image,
            link,
            abstract,
            details,
        });
        return response.status(201).send();
    }
}

export { CreatePlatformController };
