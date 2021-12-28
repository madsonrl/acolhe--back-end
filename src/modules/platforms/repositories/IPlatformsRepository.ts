import { ICreatePlatformDTO } from "../dtos/ICreatePlatformDTO";
import { Platform } from "../infra/typeorm/entities/Platform";

interface IPlatformsRepository {
    findByName(name: string): Promise<Platform>;
    list(): Promise<Platform[]>;
    create({
        id,
        name,
        image,
        link,
        abstract,
        details,
    }: ICreatePlatformDTO): Promise<void>;
    update({
        id,
        name,
        image,
        link,
        abstract,
        details,
    }: ICreatePlatformDTO): Promise<Platform>;
}

export { IPlatformsRepository };
