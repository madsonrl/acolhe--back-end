import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdatePlatformImageUseCase } from "./UpdatePlatformImageUseCase";

class UpdatePlatformImageController {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async handle(request: Request, response: Response) {
        const { platform_id } = request.query;

        const platform_file = request.file.filename;

        const updatePlatformImageUseCase = container.resolve(
            UpdatePlatformImageUseCase
        );

        await updatePlatformImageUseCase.execute({
            platform_id: platform_id.toString(),
            image_file: platform_file,
        });

        return response.status(204).send();
    }
}

export { UpdatePlatformImageController };
