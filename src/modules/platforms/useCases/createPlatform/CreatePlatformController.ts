import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePlatformUseCase } from "./CreatePlatformUseCase";

class CreatePlatformController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, link, abstract, details } = request.query;
        const platform_file = request.file.filename;

        const createPlatformUseCase = container.resolve(CreatePlatformUseCase);
        await createPlatformUseCase.execute({
            name: name.toString(),
            image: platform_file,
            link: link.toString(),
            abstract: abstract.toString(),
            details: details.toString(),
        });
        return response.status(201).send();
    }
}

export { CreatePlatformController };
