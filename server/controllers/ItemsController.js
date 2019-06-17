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

  static async create(req, res) {
    try {
      const item = await Item.create(req.body)

      res.status(201).json(item)
    } catch(err) {
      console.error(err)
      res.status(500).json({ error: { message: 'Internal Server Error' }})
    }
  }

  static async show(req, res) {
    try {
      const item = await Item.find(req.params.id)

      res.status(200).json(item)
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
