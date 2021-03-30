import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createUser1616797161941 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "password",
                        type: "varchar"
                    },
                    {
                        name: "id_navers",
                        type: "varchar",
                        isArray: true,
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamps",
                        default: "Date('now')"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}