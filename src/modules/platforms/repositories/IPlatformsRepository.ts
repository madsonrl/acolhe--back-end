import { ICreatePlatformDTO } from "../dtos/ICreatePlatformDTO";
import { Platform } from "../infra/typeorm/entities/Platform";

interface IPlatformsRepository {
    findByName(name: string): Promise<Platform>;
    findById(id: string): Promise<Platform>;
    list(): Promise<Platform[]>;
    create({
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
    delete(id: string): Promise<void>;
}

export { IPlatformsRepository };
