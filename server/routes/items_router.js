'use strict'

/**
 * Dependencies
 */

const express = require('express')
const ItemsController = require('../controllers/ItemsController')

/**
 * Define router
 */

const router = express.Router()

/**
 * Routes
 *   GET /items
 */

router.route('/')
  .get(ItemsController.index)

/**
 * Export router
 */

module.exports = router
