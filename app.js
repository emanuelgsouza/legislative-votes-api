const fastify = require('fastify')
const setupServer = require('./src/helpers/server')

require('dotenv').config()

setupServer(fastify)
  .listen(process.env.PORT, process.env.HOST)
  .then((address) => {
    console.log(`server listening on ${address}`)
  })
  .catch(err => {
    console.error(err)
  })
