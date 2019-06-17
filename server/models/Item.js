'use strict'

/**
 * Dependencies
 */

const db_client = require('../db/client')

/**
 * Define model
 */

class Item {
  static async all() {
    return []
  }
}

/**
 * Export model
 */

module.exports = Item
