/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('satellites').del()
  await knex('satellites').insert([
    {name: insight_1, longitude: 0},
    {name: insight_2, longitude: 30},
    {name: insight_3, longitude: 60},
    {name: insight_4, longitude: 90},
    {name: insight_5, longitude: 120},
    {name: insight_6, longitude: 150},
    {name: insight_7, longitude: 180},
    {name: insight_8, longitude: -150},
    {name: insight_9, longitude: -120},
    {name: insight_10, longitude: -90},
    {name: insight_11, longitude: -60},
    {name: insight_12, longitude: -30}
  ]);
};
