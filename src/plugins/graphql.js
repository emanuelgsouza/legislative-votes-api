const GQL = require('fastify-gql')
const { makeExecutableSchema } = require('graphql-tools')
const typeDefs = require('../graphql/type-defs')
const resolvers = require('../graphql/resolvers')

const init = fastify => {
  return fastify.register(GQL, {
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    graphiql: true
  })
}

module.exports = init
