interface ICreateCommentDTO {
    id?:string;
    msg: string;
    username?: string;
    platform_id: string;
}

export { ICreateCommentDTO };
