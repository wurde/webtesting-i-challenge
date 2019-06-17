'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Item {
  static all() {
    return db_client('items')
  }
}

/**
 * Export model
 */

module.exports = Item
