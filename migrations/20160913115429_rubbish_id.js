
exports.up = function(knex, Promise) {
  return knex.schema.table('wombles', function (table) {
    table.string('rubbish_id')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('wombles', function (table) {
    table.dropColumn('rubbish_id')
  })
}
