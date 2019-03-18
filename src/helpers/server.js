const serverConfig = require('../../config/server')
const databasePlugin = require('../plugins/database')
const graphqlPlugin = require('../plugins/graphql')
const loadRoutesPlugin = require('../plugins/routes')

const setupServer = fastify => {
  // setup config
  const server = fastify(serverConfig)

  // setup plugins
  databasePlugin(server)
  graphqlPlugin(server)
  loadRoutesPlugin(server)
  
  return server
}

module.exports = setupServer
