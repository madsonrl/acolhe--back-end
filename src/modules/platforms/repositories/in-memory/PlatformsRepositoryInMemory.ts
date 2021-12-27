import { Platform } from "../../infra/typeorm/entities/Platform";
import {
    ICreatePlatformDTO,
    IPlatformsRepository,
} from "../IPlatformsRepository";

class PlatformsRepositoryInMemory implements IPlatformsRepository {
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
    platforms: Platform[] = [];

    async findByName(name: string): Promise<Platform> {
        const platform = this.platforms.find(
            (platform) => platform.name === name
        );
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
}

export { PlatformsRepositoryInMemory };
