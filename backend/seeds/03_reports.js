/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reports').del()
  await knex('reports').insert([
    {time: '2022-10-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Alpha", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-11-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Bravo", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-11-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Charlie", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-11-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Delta", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Echo", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Foxtrot", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Golf", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Hotel", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "India", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Juliett", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Kilo", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Lima", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Mike", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Oscar", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-05-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Papa", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-07-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Quebec", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-10-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Romeo", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-10-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Sierra", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-11-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Tango", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-11-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Uniform", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-10-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Victor", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-07-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Whiskey", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-09-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "X-Ray", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-08-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Yankee", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-09-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Zulu", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-10-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Alpha", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-11-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Bravo", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-11-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Charlie", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-11-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Delta", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Echo", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Foxtrot", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Golf", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Hotel", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "India", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Juliett", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Kilo", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-10-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Alpha", satelliteID: 3, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-11-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Bravo", satelliteID: 3, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Charlie", satelliteID: 3, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-11-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Delta", satelliteID: 3, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Echo", satelliteID: 4, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "Foxtrot", satelliteID: 4, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Golf", satelliteID: 4, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-11-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Hotel", satelliteID: 5, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
    {time: '2022-12-12T02:24:00', latitude: 50, longitude: 20, frequency_band: "UHF", mission: "India", satelliteID: 5, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "red", reason: ["garbled voice"]},
    {time: '2022-12-17T03:24:00', latitude: 30, longitude: 40, frequency_band: "UHF", mission: "Juliett", satelliteID: 5, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["no issues"]},
    {time: '2022-12-15T03:14:00', latitude: 40, longitude: 30, frequency_band: "UHF", mission: "Kilo", satelliteID: 5, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "green", reason: ["reconnected"]},
  ]);
};

