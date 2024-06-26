'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"http://127.0.0.1:5000/api/v1"',
  BACKEND_API: '"http://127.0.0.1:5000"'
})
