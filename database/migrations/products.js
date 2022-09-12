/**
 * @param { import("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.up = function(knex) {
    return knex.schema.createTable('products', function(table) {
        table.increments('id');
        table.string('name').notNullable();
        table.string('description');
        table.integer('category_id').notNullable();
        table.double('price').notNullable();
        table.string('photo').notNullable();
        table.datetime('created_at').defaultTo(Date.now());
    });
};

/**
 * @param { impost("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.down = function(knex) {
    return knex.schema.dropTable('products');
}; 