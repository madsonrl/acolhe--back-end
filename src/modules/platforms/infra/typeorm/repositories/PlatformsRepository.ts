import { getRepository, Repository } from "typeorm";

import {
    IPlatformsRepository,
    ICreatePlatformDTO,
} from "@modules/platforms/repositories/IPlatformsRepository";

import { Platform } from "../entities/Platform";

class PlatformsRepository implements IPlatformsRepository {
    private repository: Repository<Platform>;

    constructor() {
        this.repository = getRepository(Platform);
    }

    async create({
        id,
        name,
        image,
        link,
        abstract,
        details,
    }: ICreatePlatformDTO): Promise<void> {
        const platform = this.repository.create({
            id,
            name,
            image,
            link,
            abstract,
            details,
        });

        await this.repository.save(platform);
    }

    async update({
        id,
        name,
        image,
        link,
        abstract,
        details,
    }: ICreatePlatformDTO): Promise<Platform> {
        const platform = await this.repository.findOne({ id });

        await this.repository.merge(platform, {
            id,
            name,
            image,
            link,
            abstract,
            details,
        });

        const results = await this.repository.save(platform);

        return results;
    }

    async list(): Promise<Platform[]> {
        const platforms = await this.repository.find();
        return platforms;
    }

    async findByName(name: string): Promise<Platform> {
        const platform = await this.repository.findOne({ name });
        return platform;
    }
}

export { PlatformsRepository };
