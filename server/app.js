'use strict'

/**
 * Dependencies
 */

const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

/**
 * Constants
 */

const port = process.env.PORT || 8080

/**
 * Define app
 */

const app = express()

/**
 * Middleware
 */

app.use(helmet())
app.use(cors())
app.use(express.json())

/**
 * Routes
 */

app.use('/', require('./routes/root_router'))
app.use('/items', require('./routes/items_router'))

/**
 * Error handlers
 */

app.use(require('./middleware/errors/page_not_found'))
app.use(require('./middleware/errors/render_error'))

/**
 * Start server
 */

if (module === require.main) {
  app.listen(port, () => {
    console.log(`Express running on port ${port}`)
  })
}

/**
 * Export app
 */

module.exports = app
