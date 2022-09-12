/**
 * @param { import('knex').Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.up = function (knex) {
  return knex.schema.createTable('shipping_address', function (table) {
    table.increments('id');
    table.string('email');
    table.string('phone');
    table.string('country').notNullable;
    table.string('first_name').notNullable;
    table.string('last_name').notNullable;
    table.string('company_name').notNullable;
    table.string('address').notNullable;
    table.string('apartment');
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.down = function (knex) {
  return knex.schema.dropTable('shipping_address');
};
