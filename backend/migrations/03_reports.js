/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('reports', function (table) {
    table.increments('report_id');
    table.string('time');
    table.string('frequency_band');    
    table.string('mission');   
    table.integer('latitude');   
    table.integer('longitude');  
    table.integer('satellite_id').foreign('satellites.id');  // check satellite table
    table.integer('user_id').foreign('users.userId'); // check user table
  })
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('reports')
  
};
