import { inject, injectable } from "tsyringe";

import { IPlatformsRepository } from "@modules/platforms/repositories/IPlatformsRepository";

interface IRequest {
    platform_id: string;
    image_file: string;
}

@injectable()
class UpdatePlatformImageUseCase {
    constructor(
        @inject("PlatformsRepository")
        private platformsRepository: IPlatformsRepository
    ) {}

    async execute({ platform_id, image_file }: IRequest): Promise<void> {
        const platform = await this.platformsRepository.findById(platform_id);

        platform.image = image_file;

        await this.platformsRepository.update(platform);
    }
}

export { UpdatePlatformImageUseCase };
