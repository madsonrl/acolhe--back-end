import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePlatforms1640628714805 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "platforms",

                columns: [
                    { name: "id", type: "uuid", isPrimary: true },
                    { name: "name", type: "varchar" },
                    {
                        name: "image",
                        type: "varchar",
                    },
                    { name: "link", type: "varchar" },
                    { name: "abstract", type: "varchar" },
                    { name: "details", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("platforms");
    }
}
