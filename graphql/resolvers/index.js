const { defaultsDeep } = require('lodash')
const RootQuery = require('./root-query')
const elections = require('./elections')

module.exports = defaultsDeep(RootQuery, {
  ...elections
})
