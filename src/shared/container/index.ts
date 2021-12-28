import { container } from "tsyringe";

import { PlatformsRepository } from "@modules/platforms/infra/typeorm/repositories/PlatformsRepository";
import { IPlatformsRepository } from "@modules/platforms/repositories/IPlatformsRepository";

import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepositoy";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IPlatformsRepository>(
    "PlatformsRepository",
    PlatformsRepository
);
