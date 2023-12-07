/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
// exports.seed = async function(knex) {
//   await knex('satellites').del()
//   await knex('satellites').insert([
//     {satelliteID: 1, name: "insight_1", longitude: 0},
//     {satelliteID: 2, name: "insight_2", longitude: 30},
//     {satelliteID: 3, name: "insight_3", longitude: 60},
//     {satelliteID: 4, name: "insight_4", longitude: 90},
//     {satelliteID: 5, name: "insight_5", longitude: 120},
//     {satelliteID: 6, name: "insight_6", longitude: 150},
//     {satelliteID: 7, name: "insight_7", longitude: 180},
//     {satelliteID: 8, name: "insight_8", longitude: -150},
//     {satelliteID: 9, name: "insight_9", longitude: -120},
//     {satelliteID: 10, name: "insight_10", longitude: -90},
//     {satelliteID: 11, name: "insight_11", longitude: -60},
//     {satelliteID: 12, name: "insight_12", longitude: -30}
//   ]);
// };

exports.seed = async function(knex) {
  await knex('satellites').del()
  await knex('satellites').insert([
    {name: "insight_1", longitude: 0, status: "active"},
    {name: "insight_2", longitude: 30, status: "active"},
    {name: "insight_3", longitude: 60, status: "active"},
    {name: "insight_4", longitude: 90, status: "active"},
    {name: "insight_5", longitude: 120, status: "active"},
    {name: "insight_6", longitude: 150, status: "active"},
    {name: "insight_7", longitude: 180, status: "active"},
    {name: "insight_8", longitude: -150, status: "active"},
    {name: "insight_9", longitude: -120, status: "active"},
    {name: "insight_10", longitude: -90, status: "active"},
    {name: "insight_11", longitude: -60, status: "active"},
    {name: "insight_12", longitude: -30, status: "active"}
  ]);
};
