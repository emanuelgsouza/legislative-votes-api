const Elections = (root, args, { reply }) => reply.knex('tb_elections')

module.exports = {
  Elections
}
