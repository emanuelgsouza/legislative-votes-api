const { find } = require('lodash')
const electionsJson = require('../../../elections/elections.json')

const Elections = _ => electionsJson

const Election = (_, { uuid }) => find(electionsJson, ['uuid', uuid])

module.exports = {
  Election,
  Elections
}
