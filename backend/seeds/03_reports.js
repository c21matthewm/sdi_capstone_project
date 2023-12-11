/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reports').del()
  await knex('reports').insert([
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Alpha", satelliteID: 1, userID: 2, status: "green", reason: "no issues"},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Bravo", satelliteID: 1, userID: 3, status: "green", reason: "reconnected"},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Charlie", satelliteID: 1, userID: 4, status: "red", reason: "garbled voice"},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Delta", satelliteID: 1, userID: 2, status: "green", reason: "no issues"},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Echo", satelliteID: 1, userID: 3, status: "green", reason: "reconnected"},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Foxtrot", satelliteID: 1, userID: 4, status: "red", reason: "garbled voice"},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Golf", satelliteID: 1, userID: 2, status: "green", reason: "no issues"},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Hotel", satelliteID: 2, userID: 3, status: "green", reason: "reconnected"},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "India", satelliteID: 3, userID: 4, status: "red", reason: "garbled voice"},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Juliett", satelliteID: 4, userID: 2, status: "green", reason: "no issues"},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Kilo", satelliteID: 5, userID: 3, status: "green", reason: "reconnected"},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Lima", satelliteID: 6, userID: 4, status: "red", reason: "garbled voice"},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Mike", satelliteID: 7, userID: 2, status: "green", reason: "no issues"},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Oscar", satelliteID: 8, userID: 3, status: "green", reason: "reconnected"},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Papa", satelliteID: 9, userID: 4, status: "red", reason: "garbled voice"},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Quebec", satelliteID: 10, userID: 2, status: "green", reason: "no issues"},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Romeo", satelliteID: 11, userID: 3, status: "green", reason: "reconnected"},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Sierra", satelliteID: 12, userID: 4, status: "red", reason: "garbled voice"},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Tango", satelliteID: 2, userID: 2, status: "green", reason: "no issues"},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Uniform", satelliteID: 3, userID: 3, status: "green", reason: "reconnected"},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Victor", satelliteID: 4, userID: 4, status: "red", reason: "garbled voice"},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Whiskey", satelliteID: 5, userID: 2, status: "green", reason: "no issues"},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "X-Ray", satelliteID: 6, userID: 3, status: "green", reason: "reconnected"},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Yankee", satelliteID: 7, userID: 4, status: "red", reason: "garbled voice"},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Zulu", satelliteID: 8, userID: 4, status: "red", reason: "garbled voice"},
  ]);
};

