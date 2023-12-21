import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'support_requests'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('first_name', 255).notNullable()
      table.string('last_name', 255).notNullable()
      table.string('email_address', 255).notNullable()
      table.string('support_message_title', 255).notNullable()
      table.text('support_message_text').notNullable()
      table.string('file_path', 255)
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
