const { filter } = require('lodash')
const { filterDelegates } = require('../delegates/lib/filter')

const delegates = ({ uuid }, args, { reply }) => {
  const { electionsData } = reply

  return filterDelegates(
    filter(electionsData['delegates'], ['party_uuid', uuid]),
    args.filter || {}
  )
}

module.exports = {
  delegates
}
