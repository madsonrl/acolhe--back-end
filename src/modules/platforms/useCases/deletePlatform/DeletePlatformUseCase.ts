import { inject, injectable } from "tsyringe";


import { AppError } from "@shared/errors/AppError";
import { IPlatformsRepository } from "@modules/platforms/repositories/IPlatformsRepository";

interface IRequest {
    id: string;
}

@injectable()
class DeletePlatformUseCase {
    constructor(
        @inject("PlatformsRepository")
        private platformsRepository: IPlatformsRepository
    ) {}

    async execute({ id }: IRequest): Promise<void> {

        const platformAlreadyExists = await this.platformsRepository.findById(
            id
        );

        if (!platformAlreadyExists) {
            throw new AppError("Platform not exists!");
        }

        await this.platformsRepository.delete(
            id
        );

    }
}

export { DeletePlatformUseCase };
