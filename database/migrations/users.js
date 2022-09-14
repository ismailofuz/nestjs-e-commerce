/**
 * @param { import('knex').Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('email');
    table.string('username').notNullable();
    table.string('first_name');
    table.boolean('isSeller').defaultTo(false); // sotuvchi yoki sotuvchi emasligi
    table.string('last_name');
    table.string('middle_name');
    table.string('password').notNullable();
    table.date('created_at').defaultTo(knex.fn.now());
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
