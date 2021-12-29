import { inject, injectable } from "tsyringe";


import { ICommentsRepository } from "@modules/comments/repositories/ICommentsRepository";

interface IRequest {
    id: string;
}

@injectable()
class DeleteCommentUseCase {
    constructor(
        @inject("CommentsRepository")
        private commentsRepository: ICommentsRepository
    ) {}

    async execute({ id }: IRequest): Promise<void> {
        
        await this.commentsRepository.delete(
            id
        );

    }
}

export { DeleteCommentUseCase };
