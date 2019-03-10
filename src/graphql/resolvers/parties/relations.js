const { filter } = require('lodash')

const delegates = ({ uuid }, _, { reply }) => {
  const { electionsData } = reply

  return filter(electionsData['delegates'], ['party_uuid', uuid])
}

module.exports = {
  delegates
}
