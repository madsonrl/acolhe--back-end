import { ICreateCommentDTO } from "@modules/comments/dtos/ICreateCommentDTO";
import { Comment } from "@modules/comments/infra/typeorm/entities/Comment";

import { ICommentsRepository } from "../ICommentsRepository";

class CommentsRepositoryInMemory implements ICommentsRepository {
    
    comments: Comment[] = [];

    async create({
        msg,
        username,
        platform_id,
    }: ICreateCommentDTO): Promise<Comment> {
        const comment = new Comment();

        Object.assign(comment, {
            msg,
            username,
            platform_id,
        });

        this.comments.push(comment);

        return comment;
    }

    
    async findAll(platform_id?: string, id?: string): Promise<Comment[]> {
        const all = this.comments.filter((comment) => {
            if (
                comment ||
                (id && comment.id === id) ||
                (platform_id && comment.platform_id === platform_id)
            ) {
                return comment;
            }
            return null;
        });
        return all;
    }
}

export { CommentsRepositoryInMemory };
