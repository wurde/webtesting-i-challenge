'use strict'

/**
 * Dependencies
 */

const express = require('express')
const require_param = require('../middleware/checks/require_param')
const ItemsController = require('../controllers/ItemsController')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET,POST /items
 */

router.route('/')
  .get(ItemsController.index)
  .all(require_param(['name', 'enhancement', 'durability']))
  .post(ItemsController.create)

/**
 * Routes
 *   GET /items/:id
 */

router.route('/:id')
  .get(ItemsController.show)

/**
 * Export router
 */

module.exports = router
