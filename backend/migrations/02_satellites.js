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
    table.string('orbit');
    table.string('mission');
    table.string('country');
    table.string('frequency_band');
    table.specificType('favorites', 'text[]');
    table.string('image');
    
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('satellites');
};
