/**
 * @param { import("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

 exports.up = function(knex) {
    return knex.schema.createTable('orders', function(table) {
        table.increments('id');
        table.integer('user_id').notNullable();
        table.string('name').notNullable();
        table.string('description');
        table.datetime('created_at').defaultTo(Date.now());
    });
};

/**
 * @param { impost("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.down = function(knex) {
    return knex.schema.dropTable('orders');
}; 