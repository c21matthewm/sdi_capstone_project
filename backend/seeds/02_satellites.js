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

exports.seed = async function (knex) {
  await knex('satellites').del()
  await knex('satellites').insert([
    { name: "insight_1", longitude: 0, status: "GREEN", orbit: "GEO", mission: "COMMS", frequency_band: "UHF", country: "USA" , favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"], image: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/9/22/ARC-17122-1B%20Communication-Satellite-Orbiti-82926365%201388x1050.jpg.rend.hgtvcom.616.462.suffix/1632351528867.jpeg"},
    { name: "insight_2", longitude: 30, status: "YELLOW", orbit: "GEO", mission: "ISR", frequency_band: "UHF", country: "USA" , favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"], image: "https://www.afcea.org/content/sites/default/files/field/image/RKA-USAF%20SATCOM-3-OCT17.jpg"},
    { name: "insight_3", longitude: 60, status: "RED", orbit: "GEO", mission: "GPS", frequency_band: "UHF", country: "USA" , favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"], image: "https://www.verdict.co.uk/wp-content/uploads/2020/01/satellite-breakthrough.jpg"},
    { name: "insight_4", longitude: 90, status: "GREEN", orbit: "GEO", mission: "COMMS", frequency_band: "EHF", country: "USA" , favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"], image: "https://www.afcea.org/content/sites/default/files/field/image/RKA-USAF%20SATCOM-3-OCT17.jpg"},
    { name: "insight_5", longitude: 120, status: "YELLOW", orbit: "GEO", mission: "COMMS", frequency_band: "EHF", country: "USA" , favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"], image: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/9/22/ARC-17122-1B%20Communication-Satellite-Orbiti-82926365%201388x1050.jpg.rend.hgtvcom.616.462.suffix/1632351528867.jpeg"},
    { name: "insight_6", longitude: 150, status: "RED", orbit: "GEO", mission: "ISR", frequency_band: "EHF", country: "USA" , favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"], image: "https://www.verdict.co.uk/wp-content/uploads/2020/01/satellite-breakthrough.jpg"},
    { name: "insight_7", longitude: 180, status: "GREEN", orbit: "GEO", mission: "GPS", frequency_band: "EHF", country: "USA" , favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"], image: "https://www.astronomy.com/wp-content/uploads/sites/2/2023/03/Satelliteconstellations.jpg?fit=600%2C394"},
    { name: "insight_8", longitude: -150, status: "YELLOW", orbit: "GEO", mission: "GPS", frequency_band: "SHF", country: "USA" , favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"], image: "https://www.astronomy.com/wp-content/uploads/sites/2/2023/03/Satelliteconstellations.jpg?fit=600%2C394"},
    { name: "insight_9", longitude: -120, status: "RED", orbit: "GEO", mission: "GPS", frequency_band: "SHF", country: "USA" , favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"], image: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/9/22/ARC-17122-1B%20Communication-Satellite-Orbiti-82926365%201388x1050.jpg.rend.hgtvcom.616.462.suffix/1632351528867.jpeg"},
    { name: "insight_10", longitude: -90, status: "GREEN", orbit: "GEO", mission: "GPS", frequency_band: "SHF", country: "USA" , favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"], image: "https://www.verdict.co.uk/wp-content/uploads/2020/01/satellite-breakthrough.jpg"},
    { name: "insight_11", longitude: -60, status: "YELLOW", orbit: "GEO", mission: "GPS", frequency_band: "SHF", country: "USA" , favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"], image: "https://www.afcea.org/content/sites/default/files/field/image/RKA-USAF%20SATCOM-3-OCT17.jpg"},
    { name: "insight_12", longitude: -30, status: "RED", orbit: "GEO", mission: "GPS", frequency_band: "SHF", country: "USA" , favorites: ["pMr2t4qkIgMwisegISjdwOMW9UU2"], image: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/9/22/ARC-17122-1B%20Communication-Satellite-Orbiti-82926365%201388x1050.jpg.rend.hgtvcom.616.462.suffix/1632351528867.jpeg"},
    { name: "outstar_1", longitude: 0, status: "GREEN", orbit: "GEO", mission: "COMMS", frequency_band: "UHF", country: "USA" , favorites: ["vzzdW6FCYXhs8tCRCyAo33higXk1"], image: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/9/22/ARC-17122-1B%20Communication-Satellite-Orbiti-82926365%201388x1050.jpg.rend.hgtvcom.616.462.suffix/1632351528867.jpeg"},
    { name: "outstar_2", longitude: 30, status: "YELLOW", orbit: "GEO", mission: "ISR", frequency_band: "UHF", country: "USA" , favorites: ["vzzdW6FCYXhs8tCRCyAo33higXk1"], image: "https://www.afcea.org/content/sites/default/files/field/image/RKA-USAF%20SATCOM-3-OCT17.jpg"},
    { name: "outstar_3", longitude: 60, status: "RED", orbit: "GEO", mission: "GPS", frequency_band: "UHF", country: "USA" , favorites: ["vzzdW6FCYXhs8tCRCyAo33higXk1"], image: "https://www.verdict.co.uk/wp-content/uploads/2020/01/satellite-breakthrough.jpg"},
    { name: "outstar_4", longitude: 90, status: "GREEN", orbit: "GEO", mission: "COMMS", frequency_band: "EHF", country: "USA" , favorites: ["vzzdW6FCYXhs8tCRCyAo33higXk1"], image: "https://www.afcea.org/content/sites/default/files/field/image/RKA-USAF%20SATCOM-3-OCT17.jpg"},
    { name: "outstar_5", longitude: 120, status: "YELLOW", orbit: "GEO", mission: "COMMS", frequency_band: "EHF", country: "USA" , favorites: ["vzzdW6FCYXhs8tCRCyAo33higXk1"], image: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/9/22/ARC-17122-1B%20Communication-Satellite-Orbiti-82926365%201388x1050.jpg.rend.hgtvcom.616.462.suffix/1632351528867.jpeg"},
    { name: "outstar_6", longitude: 150, status: "RED", orbit: "GEO", mission: "ISR", frequency_band: "EHF", country: "USA" , favorites: ["vzzdW6FCYXhs8tCRCyAo33higXk1"], image: "https://www.verdict.co.uk/wp-content/uploads/2020/01/satellite-breakthrough.jpg"},
    { name: "outstar_7", longitude: 180, status: "GREEN", orbit: "GEO", mission: "GPS", frequency_band: "EHF", country: "USA" , favorites: ["vzzdW6FCYXhs8tCRCyAo33higXk1"], image: "https://www.astronomy.com/wp-content/uploads/sites/2/2023/03/Satelliteconstellations.jpg?fit=600%2C394"},
    { name: "outstar_8", longitude: -150, status: "YELLOW", orbit: "GEO", mission: "GPS", frequency_band: "SHF", country: "USA" , favorites: ["vzzdW6FCYXhs8tCRCyAo33higXk1"], image: "https://www.astronomy.com/wp-content/uploads/sites/2/2023/03/Satelliteconstellations.jpg?fit=600%2C394"},
    { name: "outstar_9", longitude: -120, status: "RED", orbit: "GEO", mission: "GPS", frequency_band: "SHF", country: "USA" , favorites: ["vzzdW6FCYXhs8tCRCyAo33higXk1"], image: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/9/22/ARC-17122-1B%20Communication-Satellite-Orbiti-82926365%201388x1050.jpg.rend.hgtvcom.616.462.suffix/1632351528867.jpeg"},
    { name: "outstar_10", longitude: -90, status: "GREEN", orbit: "GEO", mission: "GPS", frequency_band: "SHF", country: "USA" , favorites: ["vzzdW6FCYXhs8tCRCyAo33higXk1"], image: "https://www.verdict.co.uk/wp-content/uploads/2020/01/satellite-breakthrough.jpg"},
    { name: "outstar_11", longitude: -60, status: "YELLOW", orbit: "GEO", mission: "GPS", frequency_band: "SHF", country: "USA" , favorites: ["vzzdW6FCYXhs8tCRCyAo33higXk1"], image: "https://www.afcea.org/content/sites/default/files/field/image/RKA-USAF%20SATCOM-3-OCT17.jpg"},
    { name: "outstar_12", longitude: -30, status: "RED", orbit: "GEO", mission: "GPS", frequency_band: "SHF", country: "USA" , favorites: ["vzzdW6FCYXhs8tCRCyAo33higXk1"], image: "https://discovery.sndimg.com/content/dam/images/discovery/fullset/2021/9/22/ARC-17122-1B%20Communication-Satellite-Orbiti-82926365%201388x1050.jpg.rend.hgtvcom.616.462.suffix/1632351528867.jpeg"}
  ]);
};
