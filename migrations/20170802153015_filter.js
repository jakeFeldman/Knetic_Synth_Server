
exports.up = function(knex, Promise) {
  return knex.schema.createTable('filter', table => {
    table.increments('id').primary();
    table.text('type').notNull();
    table.integer('frequency');
    table.integer('Q');
    table.integer('gain');
    table.integer('patch_id').unsigned().references('id').inTable('patch').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('filter');
};