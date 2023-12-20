/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('reports').del()
  await knex('reports').insert([
    {time: '2022-10-17T03:24:00', latitude: 19, longitude: 10, frequency_band: "UHF", mission: "Alpha", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-11-15T03:14:01', latitude: 19, longitude: 10, frequency_band: "UHF", mission: "Bravo", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "YELLOW", reason: ["Unknown Issue"], archived: false},
    {time: '2022-11-12T02:24:02', latitude: 19, longitude: 10, frequency_band: "UHF", mission: "Charlie", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "YELLOW", reason: ["Signal Interference"], archived: false},
    {time: '2022-11-17T03:24:03', latitude: 21, longitude: 9, frequency_band: "UHF", mission: "Delta", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "YELLOW", reason: ["Frequency Coordination"], archived: false},
    {time: '2022-12-15T03:14:04', latitude: 41, longitude: 1, frequency_band: "UHF", mission: "Echo", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-12-12T02:24:05', latitude: 21, longitude: 11, frequency_band: "UHF", mission: "Foxtrot", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-12-17T03:24:06', latitude: 48, longitude: 12, frequency_band: "EHF", mission: "Golf", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "YELLOW", reason: ["Atmospheric Conditions","Signal Interference"], archived: false},
    {time: '2022-12-15T03:14:07', latitude: 20, longitude: 11, frequency_band: "EHF", mission: "Hotel", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Atmospheric Conditions","Signal Interference"], archived: false},
    {time: '2022-12-12T02:24:08', latitude: 47, longitude: 12, frequency_band: "UHF", mission: "India", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "YELLOW", reason: ["Atmospheric Conditions","Signal Interference"], archived: false},
    {time: '2022-12-17T03:24:09', latitude: -22, longitude: 144, frequency_band: "UHF", mission: "Juliett", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Signal Interference"], archived: true},
    {time: '2022-12-15T03:14:00', latitude: -21, longitude: 143, frequency_band: "UHF", mission: "Kilo", satelliteID: 4, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Signal Interference"], archived: true},
    {time: '2022-12-12T02:24:01', latitude: -24, longitude: 144, frequency_band: "UHF", mission: "Lima", satelliteID: 5, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Unknown Issue"], archived: true},
    {time: '2022-12-17T03:24:02', latitude: -25, longitude: 140, frequency_band: "UHF", mission: "Mike", satelliteID: 5, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Equipment Malfunction"], archived: false},
    {time: '2022-12-15T03:14:03', latitude: -23, longitude: 141, frequency_band: "UHF", mission: "Oscar", satelliteID: 4, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "YELLOW", reason: ["Power Supply Issues"], archived: true},
    {time: '2022-09-12T02:24:04', latitude: -20, longitude: 145, frequency_band: "UHF", mission: "Papa", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Frequency Coordination"], archived: true},
    {time: '2022-07-17T03:24:05', latitude: -25, longitude: 143, frequency_band: "UHF", mission: "Quebec", satelliteID: 5, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-10-15T03:14:06', latitude: -22, longitude: 141, frequency_band: "UHF", mission: "Romeo", satelliteID: 5, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-10-12T02:24:07', latitude: -21, longitude: 142, frequency_band: "UHF", mission: "Sierra", satelliteID: 4, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Blocked LOS"], archived: true},
    {time: '2022-11-17T03:24:08', latitude: -20, longitude: 140, frequency_band: "UHF", mission: "Tango", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-11-15T03:14:09', latitude: 60, longitude: -125, frequency_band: "UHF", mission: "Uniform", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-10-12T02:24:00', latitude: 57, longitude: -121, frequency_band: "UHF", mission: "Victor", satelliteID: 5, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Signal Latency"], archived: true},
    {time: '2022-07-17T03:24:01', latitude: 63, longitude: -124, frequency_band: "UHF", mission: "Whiskey", satelliteID: 1, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-09-15T03:14:02', latitude: 65, longitude: -118, frequency_band: "UHF", mission: "X-Ray", satelliteID: 5, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-08-12T02:24:03', latitude: 55, longitude: -115, frequency_band: "EHF", mission: "Yankee", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Signal Interference"], archived: true},
    {time: '2022-09-12T02:24:04', latitude: 50, longitude: -120, frequency_band: "UHF", mission: "Zulu", satelliteID: 5, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Unknown Issue"], archived: false},
    {time: '2022-10-17T03:24:05', latitude: 40, longitude: -110, frequency_band: "EHF", mission: "Alpha", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-11-15T03:14:06', latitude: 30, longitude: -100, frequency_band: "UHF", mission: "Bravo", satelliteID: 9, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-11-12T02:24:07', latitude: 52, longitude: -2, frequency_band: "EHF", mission: "Charlie", satelliteID: 2, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Atmospheric Conditions"], archived: false},
    {time: '2022-11-17T03:24:08', latitude: 52, longitude: -1, frequency_band: "SHF", mission: "Delta", satelliteID: 14, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-12-15T03:14:09', latitude: 50, longitude: -1, frequency_band: "UHF", mission: "Echo", satelliteID: 11, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-12-12T02:24:00', latitude: 51, longitude: -2, frequency_band: "UHF", mission: "Foxtrot", satelliteID: 5, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Signal Interference"], archived: true},
    {time: '2022-12-17T03:24:01', latitude: 52, longitude: -1, frequency_band: "UHF", mission: "Golf", satelliteID: 11, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Signal Interference"], archived: false},
    {time: '2022-12-15T03:14:02', latitude: 30, longitude: -82, frequency_band: "UHF", mission: "Hotel", satelliteID: 11, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Signal Interference"], archived: true},
    {time: '2022-12-12T02:24:03', latitude: 31, longitude: -82, frequency_band: "UHF", mission: "India", satelliteID: 11, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Signal Interference"], archived: true},
    {time: '2022-12-17T03:24:04', latitude: 32, longitude: -83, frequency_band: "UHF", mission: "Juliett", satelliteID: 11, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Signal Interference"], archived: true},
    {time: '2022-12-15T03:14:05', latitude: 35, longitude: -81, frequency_band: "UHF", mission: "Kilo", satelliteID: 11, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Signal Interference"], archived: false},
    {time: '2022-10-17T03:24:06', latitude: 33, longitude: -87, frequency_band: "UHF", mission: "Alpha", satelliteID: 11, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-11-15T03:14:07', latitude: 36, longitude: -85, frequency_band: "SHF", mission: "Bravo", satelliteID: 14, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-12-12T02:24:08', latitude: -24, longitude: 117, frequency_band: "SHF", mission: "Charlie", satelliteID: 14, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Unknown Issue"], archived: false},
    {time: '2022-11-17T03:24:09', latitude: -23, longitude: 118, frequency_band: "SHF", mission: "Delta", satelliteID: 14, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: false},
    {time: '2022-12-15T03:14:00', latitude: 31, longitude: -98, frequency_band: "SHF", mission: "Echo", satelliteID: 14, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [], archived: true},
    {time: '2022-12-12T02:24:01', latitude: 30, longitude: -100, frequency_band: "SHF", mission: "Foxtrot", satelliteID: 14, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "YELLOW", reason: ["Atmospheric Conditions"], archived: false},
    {time: '2022-12-17T03:24:02', latitude: 42, longitude: -110, frequency_band: "SHF", mission: "Golf", satelliteID: 16, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [],archived: false},
    {time: '2022-11-15T03:14:03', latitude: 40, longitude: -109, frequency_band: "SHF", mission: "Hotel", satelliteID: 16, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [],archived: true},
    {time: '2022-12-12T02:24:04', latitude: 36, longitude: -119, frequency_band: "SHF", mission: "India", satelliteID: 16, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "RED", reason: ["Signal Interference"],archived: true},
    {time: '2022-12-17T03:24:05', latitude: 36, longitude: -121, frequency_band: "SHF", mission: "Juliett", satelliteID: 16, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [],archived: false},
    {time: '2022-12-15T03:14:06', latitude: 35, longitude: -120, frequency_band: "SHF", mission: "Kilo", satelliteID: 16, userID: "vzzdW6FCYXhs8tCRCyAo33higXk1", status: "GREEN", reason: [],archived: false},
  ]);
};

