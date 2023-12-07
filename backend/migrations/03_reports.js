/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('reports', function (table) {
    table.increments('reportID');
    table.string('time');
    table.string('frequency_band');
    table.string('mission');
    table.integer('latitude');
    table.integer('longitude');
    table.integer('userID')
    table.foreign('userID').references('users.userID');
    table.integer('satelliteID')
    table.foreign('satelliteID').references('satellites.satelliteID');
  })

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.alterTable ('reports', table =>{
    table.dropForeign('satelliteID');
    table.dropForeign('userID');
  })
  .then(function(){
    return knex.schema.dropTableIfExists('reports')
  })

};
