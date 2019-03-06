const { find } = require('lodash')

const State = (_, { uuid }, { reply }) => {
  const { electionsData } = reply
  return find(electionsData['states'], ['uuid', uuid])
}

module.exports = {
  State
}
