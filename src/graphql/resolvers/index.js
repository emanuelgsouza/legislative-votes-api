const { defaultsDeep } = require('lodash')
const RootQuery = require('./root-query')
const elections = require('./elections')
const states = require('./states')
const coligations = require('./coligations')
const parties = require('./parties')
const delegates = require('./delegates')

const resolvers = [
  elections,
  states,
  coligations,
  parties,
  delegates
]

module.exports = defaultsDeep(RootQuery, ...resolvers)
