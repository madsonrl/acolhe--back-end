import { ICreatePlatformDTO } from "../../dtos/ICreatePlatformDTO";
import { Platform } from "../../infra/typeorm/entities/Platform";
import { IPlatformsRepository } from "../IPlatformsRepository";

class PlatformsRepositoryInMemory implements IPlatformsRepository {
    platforms: Platform[] = [];

    async findByName(name: string): Promise<Platform> {
        const platform = this.platforms.find(
            (platform) => platform.name === name
        );
        return platform;
    }

    async findById(id: string): Promise<Platform> {
        const platform = this.platforms.find((platform) => platform.id === id);
        return platform;
    }

    async list(): Promise<Platform[]> {
        const all = this.platforms;

        return all;
    }
    async create({
        name,
        image,
        link,
        abstract,
        details,
    }: ICreatePlatformDTO): Promise<void> {
        const platform = new Platform();

        Object.assign(platform, {
            name,
            image,
            link,
            abstract,
            details,
        });

        this.platforms.push(platform);
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update({
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        id,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        name,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        image,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        link,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        abstract,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        details,
    }: ICreatePlatformDTO): Promise<Platform> {
        throw new Error("Method not implemented.");
    }
}

export { PlatformsRepositoryInMemory };
