const path = require('path')
const registerRoutes = require('fastify-register-routes')

const defaultPath = path.join(__dirname, '../routes')

const init = fastify => {
  fastify.register(registerRoutes, {
    regex: /((route)|(routes))\.js/,
    showTable: true,
    path: defaultPath
  })
}

module.exports = init
