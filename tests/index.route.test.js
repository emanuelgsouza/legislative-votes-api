const test = require('ava')
const setupServer = require('../src/helpers/server')
const fastify = require('fastify')

test('Test index route', async t => {
  const server = setupServer(fastify)

  const payload = {
    up: true,
    version: '1.0.0'
  }

  const res = await server.inject({
    method: 'GET',
    url: '/'
  })
  t.deepEqual(payload, JSON.parse(res.payload))
  t.deepEqual(res.statusCode, 200)
  t.pass('passing by all tests')
})
