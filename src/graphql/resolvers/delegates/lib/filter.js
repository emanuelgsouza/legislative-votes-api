const { curry } = require('ramda')
const { isNil, filter, get } = require('lodash')

const filterByStatus = curry((status, delegate) => {
  if (isNil(status)) {
    return delegate
  }

  return delegate.status === status
})

const filterByPolling = curry((is_pulling, delegate) => {
  if (isNil(is_pulling)) {
    return delegate
  }

  return delegate.is_pulling === is_pulling
})

const filterByUuid = curry((uuid, delegate) => {
  if (isNil(uuid)) {
    return delegate
  }

  return delegate.uuid === uuid
})

/**
 * perform filter based on DelegateFilter type
 * @method filterDelegates
 * @param  {Array<Object>} delegates
 * @param  {Object} filter
 * @return {Array<Object>}
 */
const filterDelegates = (delegates, filter) => {
  return delegates
    .filter(filterByUuid(get(filter, 'uuid', null)))
    .filter(filterByStatus(get(filter, 'status', null)))
    .filter(filterByPolling(get(filter, 'is_pulling', null)))
}

module.exports = {
  filterDelegates
}
