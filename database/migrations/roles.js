/**
 * @param { import('knex').Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.up = function (knex) {
  return knex.schema.createTable('roles', function (table) {
    table.increments('id');
    table.string('name').notNullable();
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.down = function (knex) {
  return knex.schema.dropTable('roles');
};
