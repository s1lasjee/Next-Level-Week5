import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateMessages1619300326991 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'messages',
      columns: [{
        name: 'id',
        type: 'uuid',
        isPrimary: true
      }, {
        name: 'admin_id',
        type: 'uuid',
        isNullable: true
      }, {
        name: 'user_id',
        type: 'uuid'
      }, {
        name: 'text',
        type: 'varchar'
      }, {
        name: 'created_at',
        type: 'timestamp',
        default: 'now()'
      }, {
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()'
      }],
      foreignKeys: [{
        name: 'FKUser_Message',
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        columnNames: ['user_id'],
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL'
      }]
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
  }
}
