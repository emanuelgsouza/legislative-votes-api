const Delegate = (_, { uuid }, { reply }) => {
  const { knex } = reply

  return knex('tb_delegates').where('uuid', uuid).first()
}

module.exports = {
  Delegate
}
