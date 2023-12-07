/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('reports', function (table) {
    table.increments('report_id');
    table.string('time');
    table.string('location');
    table.string('frequency_band');    
    table.string('mission');   
    table.string('satellite_id').foreign('satellites.satellite_id');  // check satellite table
    table.string('user_id').foreign('users.user_id'); // check user table
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reports')
  
};
