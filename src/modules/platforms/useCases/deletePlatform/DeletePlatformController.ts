import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeletePlatformUseCase } from "./DeletePlatformUseCase";

class DeletePlatformController {
    async handle(request: Request, response: Response): Promise<Response> {
        
        const {id} = request.body;

        const deletePlatformUseCase = container.resolve(
            DeletePlatformUseCase
        );
        await deletePlatformUseCase.execute({
            id
        });
        
        return response.status(200).send();
    }
}

export { DeletePlatformController };
