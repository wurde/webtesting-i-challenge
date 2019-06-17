'use strict'

/**
 * Dependencies
 */

const Item = require('../models/Item')

/**
 * Define controller
 */

class ItemsController {
  static async index(req, res) {
    try {
      const items = await Item.all()

      res.status(200).json(items)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' }})
    }
  }
}

/**
 * Export controller
 */

module.exports = ItemsController
