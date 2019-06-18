'use strict'

exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', (table) => {
    table.increments('id')
    table.text('name').notNullable()
    table.integer('durability')
    table.integer('enhancement')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
}
