const { defaultsDeep } = require('lodash')
const RootQuery = require('./root-query')
const elections = require('./elections')
const states = require('./states')
const coligations = require('./coligations')
const parties = require('./parties')

const resolvers = [
  elections,
  states,
  coligations,
  parties
]

module.exports = defaultsDeep(RootQuery, ...resolvers)
