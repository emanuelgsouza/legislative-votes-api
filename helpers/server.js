const serverConfig = require('../config/server')
const databasePlugin = require('../plugins/database')
const graphqlPlugin = require('../plugins/graphql')

const setupServer = fastify => {
  // setup config
  const server = fastify(serverConfig)

  // setup plugin
  databasePlugin(server)
  graphqlPlugin(server)

  // ready
  server
    .listen(3000)
    .then((address) => {
      server.log.info(`server listening on ${address}`)
    })
    .catch(err => {
      server.log.error(err)
    })
}

module.exports = setupServer
