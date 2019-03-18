const path = require('path')
const registerRoutes = require('fastify-register-routes')

const defaultPath = path.join(__dirname, '../routes')

const init = fastify => {
  return fastify.register(registerRoutes, {
    regex: /((route)|(routes))\.js/,
    showTable: !(process.env.NODE_ENV === 'test'),
    path: defaultPath
  })
}

module.exports = init
