import { inject, injectable } from "tsyringe";

import { IPlatformsRepository } from "@modules/platforms/repositories/IPlatformsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    id: string;
    name: string;
    image: string;
    link: string;
    abstract: string;
    details: string;
}

@injectable()
class UpdatePlatformUseCase {
    constructor(
        @inject("PlatformsRepository")
        private platformsRepository: IPlatformsRepository
    ) {}

    async execute({
        id,
        name,
        image,
        link,
        abstract,
        details,
    }: IRequest): Promise<void> {
        const packAlreadyExists = await this.platformsRepository.findByName(id);

        if (!packAlreadyExists) {
            throw new AppError("Platform not exists!");
        }

        await this.platformsRepository.update({
            id,
            name,
            image,
            link,
            abstract,
            details,
        });
    }
}

export { UpdatePlatformUseCase };
