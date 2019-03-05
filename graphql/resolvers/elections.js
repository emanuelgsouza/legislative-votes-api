const election = (root, args, { reply }) => reply.knex('tb_elections')

module.exports = election
