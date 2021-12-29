import { CommentsRepositoryInMemory } from "@modules/comments/repositories/in-memory/CommentsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCommentUseCase } from "./CreateCommentUseCase";

let createCommentUseCase: CreateCommentUseCase;
let commentsRepositoryInMemory: CommentsRepositoryInMemory;

describe("CreateComment", () => {
    beforeEach(() => {
        commentsRepositoryInMemory = new CommentsRepositoryInMemory();
        createCommentUseCase = new CreateCommentUseCase(
            commentsRepositoryInMemory
        );
    });

    it("Should be able to create a new comment", async () => {
        const comment = await createCommentUseCase.execute({
            msg: "test comment",
            username: "madson",
            platform_id: "platformid",
        });

        expect(comment).toHaveProperty("id");
    });


});
