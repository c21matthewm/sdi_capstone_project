/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reports').del()
  await knex('reports').insert([
    {id: 1, time: '2022-12-17T03:24:00', location: 'Peterson SFB', frequency_band: "UHF", mission: "mission_name", satellite_id: 1, "user_id": 1},
    {id: 2, time: '2022-12-15T03:14:00', location: 'Buckley SFB', frequency_band: "UHF", mission: "mission_name", satellite_id: 1, "user_id": 2},
    {id: 3, time: '2022-12-12T02:24:00', location: 'Schriever SFB', frequency_band: "UHF", mission: "mission_name", satellite_id: 1, "user_id": 3}
  ]);
};

