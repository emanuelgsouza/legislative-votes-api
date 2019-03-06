const { filter } = require('lodash')

const coligations = ({ uuid }, _, { reply }) => {
  const { electionsData } = reply

  return filter(electionsData['coligactions'], ['state_uuid', uuid])
}

module.exports = {
  coligations
}
