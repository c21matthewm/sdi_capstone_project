/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('satellites', table => {
    table.increments('satelliteID').primary();
    table.string('name').notNullable();
    table.integer('longitude').notNullable();
    table.string('status').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('satellites');
};
