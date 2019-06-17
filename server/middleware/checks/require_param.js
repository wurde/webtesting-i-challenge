'use strict'

/**
 * Define middleware
 */

function require_param(params) {
   return (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({ error: { message: 'Missing required form data.' }})
    }

    params.forEach(param => {
      if (!Object.keys(req.body).includes(param)) {
        return res.status(400).json({ error: { message: `Missing required ${param} field.` }})
      }
    })

    next()
  }
}

/**
 * Export middleware
 */

module.exports = require_param
