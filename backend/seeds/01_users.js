/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {userId: 1, username: 'QuantumQuasar', unit: "73rd", admin: true,},
    {userId: 2, username: 'CelestialCipher', unit: "25th", admin: false,},
    {userId: 3, username: 'MidnightMarauder', unit: "13th", admin: false,},
    {userId: 4, username: 'NebulaNomad', unit: "14th", admin: false,},
    {userId: 5, username: 'SonicSpecter', unit: "7th", admin: false,},
    {userId: 6, username: 'LunaLabyrinth', unit: "101st", admin: false,},
    {userId: 7, username: 'ZenithZephyr', unit: "25SOPS", admin: false,},
    
  ]);
};
