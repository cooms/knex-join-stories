var development = require('../knexfile').development
var knex = require('knex')(development)

module.exports = {
  getAll: getAll,
  getOutfits: getOutfits,
  getDuties: getDuties,
  newWomble: newWomble,
  delWomble: delWomble,
  updateWom: updateWom
}

function getAll () {
  return knex('wombles')
  .join('characteristics', 'wombles.characteristic_id', '=', 'characteristics.id')
  .join('rubbish', 'wombles.rubbish_id', '=', 'rubbish.id')
  .select('wombles.id as id', 'wombles.name', 'rubbish.name as trash', 'characteristics.description as outfit', 'characteristic_id', 'rubbish_id')
}

function getOutfits () {
  return knex('wombles')
  .join('characteristics', 'wombles.characteristic_id', '=', 'characteristics.id')
  .select('wombles.name', 'characteristics.description as outfit')
}

function getDuties () {
  return knex('wombles')
  .join('rubbish', 'wombles.rubbish_id', '=', 'rubbish.id')
  .select('wombles.name', 'rubbish.name as trash')
}

function newWomble (data) {
  return knex('wombles')
  .insert({name: data.name, characteristic_id: data.characteristic, rubbish_id: data.rubbish})
  .catch(console.error)
}

function delWomble (womId) {
  return knex('wombles')
  .where('id', '=', womId)
  .del()
  .catch(console.error)
}

function updateWom (data) {
  return knex('wombles')
  .where('id', '=', data.id)
  .update({
    characteristic_id: data.characteristic
  })
  .catch(console.error)
}
