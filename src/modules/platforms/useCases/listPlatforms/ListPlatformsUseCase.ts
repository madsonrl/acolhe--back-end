import { inject, injectable } from "tsyringe";

import { Platform } from "@modules/platforms/infra/typeorm/entities/Platform";
import { PlatformsRepository } from "@modules/platforms/infra/typeorm/repositories/PlatformsRepository";
import { IPlatformsRepository } from "@modules/platforms/repositories/IPlatformsRepository";

@injectable()
class ListPlatformsUsecase {
    constructor(
        @inject(PlatformsRepository)
        private platformsRepository: IPlatformsRepository
    ) {}

    async execute(): Promise<Platform[]> {
        const platforms = await this.platformsRepository.list();
        return platforms;
    }
}

export { ListPlatformsUsecase };
