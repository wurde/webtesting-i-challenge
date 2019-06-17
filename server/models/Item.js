'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')
const enhancers = require('../helpers/enhancer')

/**
 * Define model
 */

class Item {
  static async all() {
    let items = await db_client('items')

    items = items.map(item => enhancers.get(item))

    return items
  }

  static async find(id) {
    let item = await db_client('items').where({ id: id })

    item = enhancers.get(item)

    return item
  }

  static async create(item) {
    let [id] = await db_client('items').insert(item)

    let new_item = await db_client('items').where({ id: id })

    return new_item
  }
}

/**
 * Export model
 */

module.exports = Item
