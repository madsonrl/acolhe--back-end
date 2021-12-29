import { getRepository, Repository } from "typeorm";

import { ICreateCommentDTO } from "@modules/comments/dtos/ICreateCommentDTO";
import { ICommentsRepository } from "@modules/comments/repositories/ICommentsRepository";

import { Comment } from "../entities/Comment";
import { AppError } from "@shared/errors/AppError";

class CommentsRepository implements ICommentsRepository {
    private repository: Repository<Comment>;
    constructor() {
        this.repository = getRepository(Comment);
    }
    

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async create({
        msg,
        username,
        platform_id,
    }: ICreateCommentDTO): Promise<Comment> {
        const comment = this.repository.create({
            msg,
            username,
            platform_id,
        });

        await this.repository.save(comment);

        return comment;
    }

    async findAll(platform_id?: string, id?: string): Promise<Comment[]> {
        const commentsQuery = await this.repository.createQueryBuilder("d");

        if (platform_id) {
            commentsQuery.where("d.platform_id = :platform_id", { platform_id });
        }
        if (id) {
            commentsQuery.andWhere("d.id = :id", {
                id,
            });
        }

        const comments = await commentsQuery.getMany();

        return comments;
    }

    async delete(id: string): Promise<void> {
        const commentToRemove = await this.repository.findOne({id});
        
        if (!commentToRemove) {
            throw new AppError("Comment not exists!");
        }


        await this.repository.remove(commentToRemove);
    }
}

export { CommentsRepository };
