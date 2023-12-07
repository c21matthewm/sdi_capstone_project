/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reports').del()
  await knex('reports').insert([
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "mission_name", satelliteID: 1, userID: 2},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "mission_name", satelliteID: 1, userID: 3},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "mission_name", satelliteID: 1, userID: 4}
  ]);
};

