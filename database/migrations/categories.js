/**
 * @param { import("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

 exports.up = function(knex) {
    return knex.schema.createTable('categories', function(table) {
        table.increments('id');
        table.string('name').notNullable();
        table.integer('sub_category_id'); // category ga tegishli categories
        table.date('created_at').defaultTo(knex.fn.now());
    });
};

/**
 * @param { impost("knex").Knex } knex
 * @returns { Knex.SchemaBuilder }
 */

exports.down = function(knex) {
    return knex.schema.dropTable('categories');
}; 