/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {username: 'QuantumQuasar', unit: "73rd", admin: true,},
    {username: 'CelestialCipher', unit: "25th", admin: false,},
    {username: 'MidnightMarauder', unit: "13th", admin: false,},
    {username: 'NebulaNomad', unit: "14th", admin: false,},
    {username: 'SonicSpecter', unit: "7th", admin: false,},
    {username: 'LunaLabyrinth', unit: "101st", admin: false,},
    {username: 'ZenithZephyr', unit: "25SOPS", admin: false,},
    
  ]);
};
