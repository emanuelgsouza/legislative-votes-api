const fastifyPlugin = require('fastify-plugin')
const knex = require('knex')
const options = require('../config/database')

function fastifyKnexJS (fastify, opts, next) {
  try {
    const handler = knex(opts)
    fastify.decorateReply('knex', handler)
    next()
  } catch (err) {
    next(err)
  }
}

const init = fastify => {
  const plugin = fastifyPlugin(fastifyKnexJS, '>=0.30.0')
  
  fastify.register(plugin, options, err => console.error(err))
}

module.exports = init
