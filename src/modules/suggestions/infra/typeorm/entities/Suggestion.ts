import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("suggestions")
export class Suggestion {
    @PrimaryColumn()
    id: string;
    @Column()
    username?: string;
    @Column()
    msg: string;
    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }

        if (!this.username) {
            this.username = "Anonymous";
        }
    }
}
