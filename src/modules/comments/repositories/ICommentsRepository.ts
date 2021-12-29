import { ICreateCommentDTO } from "../dtos/ICreateCommentDTO";
import { Comment } from "../infra/typeorm/entities/Comment";

interface ICommentsRepository {
    create(data: ICreateCommentDTO): Promise<Comment>;
    findAll(platform_id?: string, id?: string): Promise<Comment[]>;
  
}

export { ICommentsRepository };
