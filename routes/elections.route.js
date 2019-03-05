const routeDeff = {
  method: 'get',
  path: '/elections',
  handler (_, reply) {
    reply.knex('tb_elections')
      .then(rows => {
        reply.send(rows)
      })
      .catch(err => reply.send(err))
  }
}

module.exports = routeDeff
