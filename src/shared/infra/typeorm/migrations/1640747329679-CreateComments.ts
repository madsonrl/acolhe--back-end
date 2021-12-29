import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateComments1640747329679 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "comments",

                columns: [
                    { name: "id", type: "uuid", isPrimary: true },
                    { name: "msg", type: "varchar" },
                    {name: "username", type: "varchar" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "platform_id", type: "uuid", isNullable: true },
                ],
                foreignKeys: [
                    {
                        name: "FKPlatformComment",
                        referencedTableName: "platforms",
                        referencedColumnNames: ["id"],
                        columnNames: ["platform_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("comments");
    }

}
