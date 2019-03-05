const Elections = (root, args, { reply }) => reply.knex('tb_elections')

const Election = (_, { uuid }, { reply }) => {
  const { knex } = reply

  return knex('tb_elections')
    .where('uuid', uuid)
    .first()
}

module.exports = {
  Election,
  Elections
}
