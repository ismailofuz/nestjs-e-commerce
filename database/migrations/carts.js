/**
 * @param { import('knex').Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.up = function (knex) {
  return knex.schema.createTable('carts', function (table) {
    table.increments('id');
    table.integer('product_id');
    table.integer('user_id').notNullable(); // bu cart kimdirga tegishli bo'ladi
    table.double('total_price');
    table.datetime('created_at').defaultTo(Date.now());
  });
};

/**
 * @param { import('knex').Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.down = function (knex) {
  return knex.schema.dropTable('carts');
};
