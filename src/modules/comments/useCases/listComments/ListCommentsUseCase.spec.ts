import { CommentsRepositoryInMemory } from "@modules/comments/repositories/in-memory/CommentsRepositoryInMemory";

import { ListCommentsUseCase } from "./ListCommentsUseCase";

let listCommentsUseCase: ListCommentsUseCase;
let commentsRepositoryInMemory: CommentsRepositoryInMemory;
describe("List comments", () => {
    beforeEach(() => {
        commentsRepositoryInMemory = new CommentsRepositoryInMemory();
        listCommentsUseCase = new ListCommentsUseCase(commentsRepositoryInMemory);
    });

    it("Should be able to list all comments", async () => {
        const comment = await commentsRepositoryInMemory.create({
            msg: "comment list of test",
            username: "madson",
            platform_id: "platformId",
        });

        const comments = await listCommentsUseCase.execute({});

        expect(comments).toEqual([comment]);
    });

    it("Should be able to list by platform id", async () => {
        const comment = await commentsRepositoryInMemory.create({
            msg: "5454xzxz5",
            username: "user",
            platform_id: "platformId_test",
        });

        const comments = await listCommentsUseCase.execute({
            platform_id: "platformId_test",
        });

        expect(comments).toEqual([comment]);
    });

    
});
