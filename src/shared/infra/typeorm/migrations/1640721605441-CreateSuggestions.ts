import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSuggestions1640721605441 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "suggestions",

                columns: [
                    { name: "id", type: "uuid", isPrimary: true },
                    { name: "username", type: "varchar" },
                    {
                        name: "msg",
                        type: "varchar",
                    },
                    { name: "created_at", type: "timestamp", default: "now()" },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("suggestions");
    }
}
