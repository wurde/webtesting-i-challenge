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
}

/**
 * Export model
 */

module.exports = Item
