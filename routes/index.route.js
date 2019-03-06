const pkg = require('../package.json')

module.exports = {
  method: 'get',
  path: '/',
  handler (req, reply) {
    reply.send({
      up: true,
      version: pkg.version
    })
  }
}
