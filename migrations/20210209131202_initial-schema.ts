import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.bigIncrements('id').primary();
    table.string('email').notNullable();
    table.timestamp('created').defaultTo(knex.fn.now());
    table.timestamp('updated').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  for (const table of ['users']) {
    await knex.schema.dropTable(table);
  }
}
