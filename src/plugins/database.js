const fastifyPlugin = require('fastify-plugin')
// const knex = require('knex')
// const options = require('../../config/database')

const electionsData = require('../elections/2018')

function fastifyKnexJS (fastify, opts, next) {
  try {
    // const handler = knex(opts)
    // fastify.decorateReply('knex', handler)
    fastify.decorateReply('electionsData', electionsData)
    next()
  } catch (err) {
    next(err)
  }
}

const init = fastify => {
  const plugin = fastifyPlugin(fastifyKnexJS, '>=0.30.0')
  
  fastify.register(plugin, {}, err => console.error(err))
}

module.exports = init
