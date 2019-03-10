const { filter } = require('lodash')

const states = ({ uuid }, _, {  reply}) => {
  const { electionsData } = reply

  return filter(electionsData['states'], ['election_uuid', uuid])
}

module.exports = {
  states
}
