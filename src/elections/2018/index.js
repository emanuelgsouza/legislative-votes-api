const glob = require('glob')
const path = require('path')
const { omit, get, flattenDeep, concat } = require('lodash')

const PATTERN_STATES = path.join(__dirname, '/*.json')

const loadFile = filePath => require(filePath)

const extractPartyFromColigation = coligation => {
  return get(coligation, 'partidos', []).map(party => omit(party, ['candidatos']))
}

const extractDelegatesFromColigation = coligation => {
  return get(coligation, 'partidos', []).map(party => get(party, 'candidatos', ''))
}

const zip = (object, state) => {
  object['states'] = concat(object['states'], state['state'])
  object['coligactions'] = concat(object['coligactions'], state['coligactions'])
  object['parties'] = concat(object['parties'], state['parties'])
  object['delegates'] = concat(object['delegates'], state['delegates'])
  return object
}

const loadStates = () => {
  return glob
    .sync(PATTERN_STATES)
    .map(loadFile)
    .map(state => {
      const { coligacoes } = state

      return {
        state: omit(state, ['coligacoes']),
        coligactions: coligacoes.map(coligation => omit(coligation, ['partidos'])),
        parties: flattenDeep(coligacoes.map(extractPartyFromColigation)),
        delegates: flattenDeep(coligacoes.map(extractDelegatesFromColigation))
      }
    })
    .reduce(zip, {
      states: [],
      coligactions: [],
      parties: [],
      delegates: []
    })
}

module.exports = Object.freeze({
  ...loadStates(),
})
