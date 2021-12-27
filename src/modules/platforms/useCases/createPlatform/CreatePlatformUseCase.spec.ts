import { PlatformsRepositoryInMemory } from "@modules/platforms/repositories/in-memory/PlatformsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreatePlatformUseCase } from "./CreatePlatformUseCase";

let createPlatformUseCase: CreatePlatformUseCase;
let platformsRepositoryInMemory: PlatformsRepositoryInMemory;

describe("Criar Platform", () => {
    beforeEach(() => {
        platformsRepositoryInMemory = new PlatformsRepositoryInMemory();
        createPlatformUseCase = new CreatePlatformUseCase(
            platformsRepositoryInMemory
        );
    });

    it("should be able to  create a new platform", async () => {
        const platform = {
            id: "idpack",
            name: "Platform of the test",
            image: "././teste.jpg",
            link: "www.teste.com",
            abstract: "teste de resumo ",
            details: "detalhes",
        };

        await createPlatformUseCase.execute({
            id: platform.id,
            name: platform.name,
            image: platform.image,
            link: platform.link,
            abstract: platform.abstract,
            details: platform.details,
        });
        const packCreated = await platformsRepositoryInMemory.findByName(
            platform.name
        );

        expect(packCreated).toHaveProperty("id");
    });

    it("should not be able to  create a new platform with id exists", async () => {
        expect(async () => {
            const platform = {
                id: "idpackdupli",
                name: "Platform of the test duplicated",
                image: "././teste.jpg",
                link: "www.teste.com",
                abstract: "teste de resumo ",
                details: "detalhes",
            };

            await createPlatformUseCase.execute({
                id: platform.id,
                name: platform.name,
                image: platform.image,
                link: platform.link,
                abstract: platform.abstract,
                details: platform.details,
            });

            await createPlatformUseCase.execute({
                id: platform.id,
                name: platform.name,
                image: platform.image,
                link: platform.link,
                abstract: platform.abstract,
                details: platform.details,
            });
        }).rejects.toBeInstanceOf(AppError);
    });
});
