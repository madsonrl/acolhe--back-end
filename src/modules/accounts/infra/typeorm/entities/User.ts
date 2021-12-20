import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;
    @Column()
    username: string;
    @Column()
    name: string;
    @Column()
    password: string;
    @Column()
    isAdmin: boolean;
    @Column()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User };
