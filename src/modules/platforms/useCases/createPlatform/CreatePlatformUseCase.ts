import { inject, injectable } from "tsyringe";

import { IPlatformsRepository } from "@modules/platforms/repositories/IPlatformsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
    id?: string;
    name: string;
    image: string;
    link: string;
    abstract: string;
    details: string;
}

@injectable()
class CreatePlatformUseCase {
    constructor(
        @inject("PlatformsRepository")
        private platformsRepository: IPlatformsRepository
    ) {}

    async execute({
        name,
        image,
        link,
        abstract,
        details,
    }: IRequest): Promise<void> {
        const platformAlreadyExists = await this.platformsRepository.findByName(
            name
        );

        if (platformAlreadyExists) {
            throw new AppError("Platform Already exists!");
        }

        await this.platformsRepository.create({
            name,
            image,
            link,
            abstract,
            details,
        });
    }
}

export { CreatePlatformUseCase };
