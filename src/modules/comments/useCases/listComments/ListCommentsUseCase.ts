import { inject, injectable } from "tsyringe";

import { Comment } from "@modules/comments/infra/typeorm/entities/Comment";
import { ICommentsRepository } from "@modules/comments/repositories/ICommentsRepository";

interface IRequest {
    platform_id?: string;
    id?: string;
}

@injectable()
class ListCommentsUseCase {
    constructor(
        @inject("CommentsRepository")
        private commentsRepository: ICommentsRepository
    ) {}

    async execute({ platform_id, id }: IRequest): Promise<Comment[]> {
        const comments = await this.commentsRepository.findAll(
            platform_id,
            id
        );
        return comments;
    }
}

export { ListCommentsUseCase };
