import { container } from "tsyringe";

import { PlatformsRepository } from "@modules/platforms/infra/typeorm/repositories/PlatformsRepository";
import { IPlatformsRepository } from "@modules/platforms/repositories/IPlatformsRepository";
import { SuggestionsRepository } from "@modules/suggestions/infra/typeorm/repositories/SuggestionsRepository";
import { ISuggestionsRepository } from "@modules/suggestions/repositories/ISuggestionsRepository";

import { UsersRepository } from "../../modules/accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepositoy";
import { ICommentsRepository } from "@modules/comments/repositories/ICommentsRepository";
import { CommentsRepository } from "@modules/comments/infra/typeorm/repositories/CommentsRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IPlatformsRepository>(
    "PlatformsRepository",
    PlatformsRepository
);

container.registerSingleton<ISuggestionsRepository>(
    "SuggestionsRepository",
    SuggestionsRepository
);

container.registerSingleton<ICommentsRepository>(
    "CommentsRepository",
    CommentsRepository
);