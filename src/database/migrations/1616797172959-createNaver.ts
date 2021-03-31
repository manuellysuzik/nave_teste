import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createNaver1616797172959 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table({
                name: "navers",
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
                        name: "birthdate",
                        type: "date"
                    },
                    {
                        name: "admission_date",
                        type: "date"
                    },
                    {
                        name: "job_role",
                        type: "varchar"
                    },
                    {
                        name: "id_user",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "Projects",
                        type: "varchar",
                        isArray: true,
                        isNullable: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("navers")
    }

}
