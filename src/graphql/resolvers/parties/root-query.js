const { find } = require('lodash')

const Party = (_, { uuid }, { reply }) => {
  const { electionsData } = reply

  return find(electionsData['parties'], ['uuid', uuid])
}

module.exports = {
  Party
}
