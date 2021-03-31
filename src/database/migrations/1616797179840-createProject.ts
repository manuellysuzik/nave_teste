import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProject1616797179840 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "projects",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "id_navers",
                        type: "varchar"
                    },
                    {
                        name: "id_user",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamps",
                        default: "Date('now')"
                    },

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("projects")
    }

}
