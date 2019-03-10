const { find } = require('lodash')

const Coligation = (_, { uuid }, { reply }) => {
  const { electionsData } = reply

  return find(electionsData['coligactions'], ['uuid', uuid])
}

module.exports = {
  Coligation
}
