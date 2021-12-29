import { inject, injectable } from "tsyringe";

import { Comment } from "@modules/comments/infra/typeorm/entities/Comment";
import { ICommentsRepository } from "@modules/comments/repositories/ICommentsRepository";

interface IRequest {
    msg: string;
    username?: string;
    platform_id: string;
}

@injectable()
class CreateCommentUseCase {
    constructor(
        @inject("CommentsRepository")
        private commentsRepository: ICommentsRepository
    ) {}

    async execute({ msg, username, platform_id }: IRequest): Promise<Comment> {
        const comment = await this.commentsRepository.create({
            msg,
            username,
            platform_id,
        });

        return comment;
    }
}

export { CreateCommentUseCase };
