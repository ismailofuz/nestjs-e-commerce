/**
 * @param { import("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

 exports.up = function(knex) {
    return knex.schema.createTable('orders', function(table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('description');
    });
};

/**
 * @param { impost("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.down = function(knex) {
    return knex.schema.dropTable('orders');
}; 