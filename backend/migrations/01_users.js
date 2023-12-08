/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('users', table =>{
        table.increments('userID').primary();
        table.string('email');
        table.string('unit');
        table.string('uid');
        table.boolean('admin');
        table.string('name');
});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};

