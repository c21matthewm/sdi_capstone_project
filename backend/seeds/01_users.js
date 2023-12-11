/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {email: 'admin@gmail.com', unit: "73rd", admin: true, uid: "pMr2t4qkIgMwisegISjdwOMW9UU2", name: "admin"},
    {email: 'user@gmail.com', unit: "25th", admin: false, uid: "vzzdW6FCYXhs8tCRCyAo33higXk1", name: "user1"},
    {email: 'user2@gmail.com', unit: "13th", admin: false, uid: "9RnNSZmZkGamr2BsCDEfkl7D0LI2", name: "user2"},
    {email: 'user3@gmail.com', unit: "14th", admin: false, uid: "8AQrQC7C6NR8U5TNmxvYHz2ZsIv1", name: "user3"},
    
  ]);
};