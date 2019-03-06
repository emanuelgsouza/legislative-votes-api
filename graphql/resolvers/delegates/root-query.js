const { find } = require('lodash')

const Delegate = (_, { uuid }, { reply }) => {
  const { electionsData } = reply

  return find(electionsData['delegates'], ['uuid', uuid])
}

module.exports = {
  Delegate
}
