/**
 * @param { import('knex').Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.up = function (knex) {
  return knex.schema.createTable('carts', function (table) {
    table.increments('id');
    table.integer('product_id');
    table.double('total_price');
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.down = function (knex) {
  return knex.schema.dropTable('carts');
};
