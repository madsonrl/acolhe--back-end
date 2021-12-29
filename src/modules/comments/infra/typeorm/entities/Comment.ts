import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Platform } from "../../../../platforms/infra/typeorm/entities/Platform";

@Entity("comments")
export class Comment {
    @PrimaryColumn()
    id?: string;
    @Column()
    msg: string;
    @Column()
    username: string;
    @Column()
    created_at: Date;
    @ManyToOne(() => Platform)
    @JoinColumn({ name: "platform_id" })
    platform: Platform;
    @Column()
    platform_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
        if (!this.username) {
            this.username = "Anonymous";
        }
    }
}
