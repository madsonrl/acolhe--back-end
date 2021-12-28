import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("platforms")
export class Platform {
    @PrimaryColumn()
    id?: string;
    @Column()
    name: string;
    @Column()
    image: string;
    @Column()
    link: string;
    @Column()
    abstract: string;
    @Column()
    details: string;
    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }

        if (!this.image) {
            this.image = "default.jpg";
        }
    }
}
