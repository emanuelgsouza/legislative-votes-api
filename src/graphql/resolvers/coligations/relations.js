const { filter } = require('lodash')

const parties = ({ uuid }, _, { reply }) => {
  const { electionsData } = reply

  return filter(electionsData['parties'], ['coligation_uuid', uuid])
}

module.exports = {
  parties
}
