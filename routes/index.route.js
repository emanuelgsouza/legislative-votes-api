const routeDeff = {
  method: 'get',
  path: '/',
  handler (_, reply) {
    reply.send({
      message: 'Bem vindo a api dos dados dos Deputados Federais'
    })
  }
}

module.exports = routeDeff
