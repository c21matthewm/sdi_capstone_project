/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('reports', function (table) {
    table.increments('id').primary();
    table.string('time');
    table.string('location');
    table.string('frequency_band');    
    table.string('mission');   
    table.integer('satellite_id').foreign('satellites.id');  // check satellite table
    table.integer('user_id').foreign('users.id'); // check user table
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reports')
  
};
