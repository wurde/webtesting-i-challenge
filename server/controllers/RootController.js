'use strict'

/**
 * Define controller
 */

class RootController {
  static hello(req, res) {
    res.sendStatus(200)
  }
}

/**
 * Export controller
 */

module.exports = RootController
